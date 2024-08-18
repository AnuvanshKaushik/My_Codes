import pandas as pd

df = pd.read_csv(r'C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani21.csv')

df.dropna(subset=['Date'], inplace = True)

print(df.to_string())
df['Date'] = pd.to_datetime(df['Date'])

print(df.to_string())
