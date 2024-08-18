import pandas as pd

df = pd.read_csv(r'C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani21.csv')


for x in df.index:
  if df.loc[x, "Duration"] > 120:
    df.loc[x, "Duration"] = 60

print(df.to_string())