import pandas as pd

df = pd.read_csv(r"C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani21.csv")

print(df.to_string()) 

print(pd.options.display.max_rows) 

pd.options.display.max_rows = 100

df = pd.read_csv(r'C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani21.csv')

print(df)
