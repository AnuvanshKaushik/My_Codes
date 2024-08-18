import pandas as pd

a = pd.read_csv(r'E:\Pranjali\SbjainCompany\intra\EDULYT INDIA\PRACTICE\PANDAS\Ani21.csv')

b = a.dropna()

print(a.to_string())

# a.dropna(inplace = True)

# print(a.to_string())

x = a["Calories"].mean()
x = a["Calories"].median()
x = a["Calories"].mode()[0]

a["Calories"].fillna(x, inplace = True)
print(a.to_string())