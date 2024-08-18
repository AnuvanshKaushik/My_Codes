import pandas as pd

df = pd.read_csv(r'C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani21.csv')

print(df.duplicated())
df.drop_duplicates(inplace = True)
print(df.to_string())