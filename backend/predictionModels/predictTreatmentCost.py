from langchain.embeddings import SentenceTransformerEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.llms import Cohere
import os
import json

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")
os.environ["TOKENIZERS_PARALLELISM"] = "False"

embeddings = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

db = Chroma(persist_directory="./backend/chromaDB/treatmentCostDB", embedding_function=embeddings)

llm = ChatOpenAI(model_name="gpt-3.5-turbo")
# llm = Cohere(cohere_api_key="rYRJo3nZNRQ1jGHTyjLu3jyc8MdW8CkyFDfa8C4X")

retriever = db.as_retriever()

qa = RetrievalQA.from_chain_type(
  llm=llm,
  retriever=retriever,
  chain_type='stuff',
  verbose=False
)

prompt = """
  Act as an Health care expert who can perdict the Treatment/surgery cost of the given treatment/surgery name. You should respond with fixed cost, cost in range is not acceptable. In the input you will get surgery name and reason, give weightage to surgery name. If cost is unknown give 0 strictly. Give cost without any commas. Your reply should be in the form of a JSON object enclosing in double quotes strictly adhering to the following format without any intro or outro.
  input:
  {disease}

  output format (double quotes are mandatory):
  {{
    "cost": "50000"
  }}
"""

prompt_template = PromptTemplate(
    input_variables=["disease"],
    template=prompt
)

def predict_treatment_cost(disease):
  response = qa.run(prompt_template.format(disease=disease))
  print(response)
  return json.loads(response)
