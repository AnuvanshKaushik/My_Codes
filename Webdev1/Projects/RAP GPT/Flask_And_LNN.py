from flask import Flask,request,render_template,url_for
import replicate
import os
os.environ['REPLICATE_API_TOKEN'] = 'r8_Bgyd0I0WRI7eIrEBjBtRHtAiOpwayXJ3u330k'
def CONTENT_GENERATE(prompt_query):
  ans_query = ''
  for event in replicate.stream(
    "meta/meta-llama-3.1-405b-instruct",
    input={
      "top_p": 0.9,
      "prompt": prompt_query,
      "max_tokens": 1024,
      "min_tokens": 0,
      "temperature": 0.6,
      "system_prompt": "You are a helpful assistant.",
      "presence_penalty": 0,
      "frequency_penalty": 0
    },
  ):
    ans_query += str(event)
    print(str(event), end="")
  return ans_query  # Return the final ans_query

app= Flask(__name__,template_folder=r"C:\Users\kaush\Downloads\Anuvansh\Webdev1",static_folder=r"C:\Users\kaush\Downloads\Anuvansh\Webdev1\CSS\CSS") #Creating a Flask class object


def get_content(user_query):
       # Replace this with your logic to fetch content from a database, API, or any other source
    return user_query
@app.route('/ChatGpt') 
def home():  
    return render_template('HTML/ChatGpt.html');  

# @app.route('/gym') 
# def GYM():  
#     return render_template('HTML/Project gym.html');  

@app.route('/process_query',methods=['POST'])

def process_query():
    if request.method =='POST':
        user_query=request.form['QUESTION']
        
#  Process the user query using your LLM (replace with your logic)
#  processed_data = llm.process(user_query)
    
        return render_template('HTML/ChatGpt.html', content=CONTENT_GENERATE(user_query))

  # Handle potential errors (e.g., empty query)
    return render_template('HTML/ChatGpt.html', content=get_content(user_query))


if __name__ =='__main__':  
    app.run(debug=True)