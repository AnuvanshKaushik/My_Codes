from numpy import random
import matplotlib.pyplot as plt
import seaborn as sns

a=random.poisson(n=20, p=0.5, size=10)
sns.distplot(a, hist=True, kde=True)
print(a)
plt.show()