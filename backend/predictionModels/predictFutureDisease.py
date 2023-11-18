from langchain.embeddings import SentenceTransformerEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from langchain.llms import Cohere
import os
import json

os.environ["OPENAI_API_KEY"] = os.getenv("RUPESH_OPENAI_API_KEY")
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
  Act as an Health care expert. Perdict the all future diseases (maximum 3, minimum 2) which will require surgery/treatment when i get old. Your reply should be in the form of a JSON object enclosing in double quotes strictly adhering to the following format without any intro or outro.
  output format:
  [{{
    "disease name": "future disease name",
    "surgery name": "future surgery/treatment name",
    "reason": ""
  }}
  ...
  ]

  input:
    {current_health_conditions}
  
"""

prompt_template = PromptTemplate(
    input_variables=["current_health_conditions"],
    template=prompt
)

def predict_future_disease(current_health_conditions):
  response = qa.run(prompt_template.format(current_health_conditions=current_health_conditions))
  print(response)
  return json.loads(response)


  # sample output:
  # [{{
  #   "name": "Retinopathy",
  #   "reason": "",
  #   "treatment Name": "Diabetic Retinopathy Treatment",
  # }}
  # ...
  # ]

#   prompt = """
#   Act as an Health care expert mandatorily. Perdict the future severe surgeries/big treatments which I will need to get in my retirement age from my current health conditions. Be specific about treatment/surgery name but use less medical names and prefer common names. You will receive my current health conditions in the input. Your reply should be in the form of a JSON object enclosing in double quotes strictly adhering to the following format without any intro or outro.
#   output format:
#   [{{
#     "surgery name": "future surgery/treatment name",
#     "reason": "",
#   }},
#   ...
#   ]

#   input:
#     {current_health_conditions}
  
# """


# prompt = """
#   Act as an Health care expert. Perdict the all future diseases (maximum 3, minimum 2) which I can get from my current health conditions and surgery required for that. Your reply should be in the form of a JSON object enclosing in double quotes strictly adhering to the following format without any intro or outro.
#   output format:
#   [{{
#     "disease name": "future disease name",
#     "surgery name": "future surgery/treatment name",
#     "reason": ""
#   }}
#   ...
#   ]

#   input:
#     {current_health_conditions}
  
# """
