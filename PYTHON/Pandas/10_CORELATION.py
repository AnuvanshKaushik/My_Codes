import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv(r'C:\Users\kaush\Downloads\Anuvansh\PYTHON\Pandas\Ani22.csv')

print(df.corr())

df.plot()

df.plot(kind = 'line', x = 'Duration', y = 'Calories')
df.plot(kind = 'scatter', x = 'Duration', y = 'Maxpulse')

df["Duration"].plot(kind = 'hist')
        

plt.show()