
import pandas as pd
import matplotlib.pyplot as plt

pd.options.display.max_columns = 20

# Load the data from the Excel file
file_path = r"C:\Users\kaush\Downloads\Anuvansh\PYTHON\Projects\Credit Banking_Project - 1.xls"  # Update this to your file path if necessary
customer_acquisition = pd.read_excel(file_path, sheet_name='Customer Acqusition')
spend = pd.read_excel(file_path, sheet_name='Spend')
repayment = pd.read_excel(file_path, sheet_name='Repayment')

# Display the first few rows of each dataframe
print(customer_acquisition.head())
print(spend.head())
print(repayment.head())



# Data Cleaning: On month basis
spend['Months']=spend.Month.dt.month
spend['Year']=spend.Month.dt.year
repayment['Months']=repayment.Month.dt.month
repayment['Year']=repayment.Month.dt.year
print(spend.head())
print(repayment.head())

# Data Cleaning: Treat age values less than 18
valid_ages = customer_acquisition[customer_acquisition['Age'] >= 18]['Age']
average_age = valid_ages.mean()
customer_acquisition['Age'] = customer_acquisition['Age'].apply(lambda x: average_age if x < 18 else x)


# Merge spend with customer acquisition to get the credit limit and other details
spend_merged = spend.merge(customer_acquisition, left_on='Costomer', right_on='Customer')

# Data Cleaning: Check for overspending
overspend = spend_merged.groupby(['Customer', 'Month']).agg({'Amount': 'sum', 'Limit': 'max'})
overspend['Overspent'] = overspend['Amount'] > overspend['Limit']
overspend_customers = overspend[overspend['Overspent']].reset_index()
print(overspend_customers)

# Task 1: Monthly spend of each customer
monthly_spend = spend.groupby(['Costomer', 'Months','Year']).agg({'Amount': 'sum'}).reset_index()
print(monthly_spend)

plt.bar(monthly_spend['Months'],monthly_spend['Amount'], color ='red', 
        width = 0.4)

plt.xlabel("Months")
plt.ylabel("Amount(in Million)")
plt.title("Monthly spend of customer")
plt.legend()
plt.show()


# Task 2: Monthly repayment of each customer
monthly_repayment = repayment.groupby(['Costomer', 'Months','Year']).agg({'Amount': 'sum'}).reset_index()
print(monthly_repayment.head(20))

plt.bar(monthly_repayment['Months'],monthly_repayment['Amount'], color ='red', 
        width = 0.4)

plt.xlabel("Months")
plt.ylabel("Amount(in Million)")
plt.title("Monthly repayment of customer")
plt.show()



# Task 3: Highest paying 10 customers
total_spend = repayment.groupby('Costomer').agg({'Amount': 'sum'}).reset_index()
highest_paying_customers = total_spend.sort_values(by='Amount', ascending=False).head(10)
print(highest_paying_customers)

plt.bar(highest_paying_customers['Costomer'],highest_paying_customers['Amount'], color ='red', 
        width = 0.4)

plt.xlabel("Costomer")
plt.ylabel("Amount(in Million)")
plt.title("Highest paying 10 customers")
plt.show()



# Task 4: Segment-wise spending
segment_spending = spend_merged.groupby('Segment').agg({'Amount': 'sum'}).reset_index()
print(segment_spending.head)

mylabels = ["Govt", "Normal Salary", "Salaried_MNC", "Salaried_Pvt","Self Employed"]
plt.pie(segment_spending['Amount'],labels=mylabels)
plt.title("Segment-wise spending")
plt.show()

# Task 5: Age group-wise spending
customer_spend = spend_merged.groupby(['Customer', 'Age']).agg({'Amount': 'sum'}).reset_index()
age_groups = pd.cut(customer_spend['Age'], bins=[0, 25, 35, 45, 55, 65, 100], labels=['<25', '25-35', '35-45', '45-55', '55-65', '65+'])
age_group_spending = customer_spend.groupby(age_groups).agg({'Amount': 'sum'}).reset_index()
print(age_group_spending)

mylabels = ['<25', '25-35', '35-45', '45-55', '55-65', '65+']
plt.pie(age_group_spending['Amount'],labels=mylabels)
plt.title("Age group-wise spending")
plt.show()

# Task 6: Most profitable segment
spend_repayment = monthly_spend.merge(monthly_repayment, on=['Costomer', 'Months','Year'], how='left', suffixes=('_spend', '_repay'))
spend_repayment = spend_repayment.merge(customer_acquisition, left_on='Costomer', right_on='Customer')
spend_repayment['Due'] = spend_repayment['Amount_spend'] - spend_repayment['Amount_repay'].fillna(0)
spend_repayment['Interest'] = spend_repayment['Due'] * 0.029
segment_profit = spend_repayment.groupby('Segment').agg({'Interest': 'sum'}).reset_index()
most_profitable_segment = segment_profit.sort_values(by='Interest', ascending=False).head(1)
print(segment_profit)

mylabels = ["Govt", "Normal Salary", "Salaried_MNC", "Salaried_Pvt","Self Employed"]
plt.pie(segment_profit['Interest'],labels=mylabels)
plt.title("Most profitable segment")
plt.show()

# Task 7: Category-wise spending
category_spending = spend.groupby('Type').agg({'Amount': 'sum'}).reset_index()
print(category_spending)

mylabels = ["AIR TICKET", "AUTO", "BIKE", "BUS TICKET","CAMERA", "CAR", "CLOTHES", "FOOD","JEWELLERY", "MOVIE TICKET", "PETRO", "RENTAL","SANDALS", "SHOPPING", "TRAIN TICKET"]
plt.pie(category_spending['Amount'],labels=mylabels)
plt.title("Category-wise spending")
plt.show()

# Task 8: Impose an interest rate of 2.9% on due amounts
spend_repayment['Interest'] = spend_repayment['Due'] * 0.029
spend_repayment['imposed'] = spend_repayment['Interest'] > 0
spend_repayment = spend_repayment[spend_repayment['imposed']].reset_index()
Interest=spend_repayment[['Customer', 'Months','Year', 'Interest']]
print(Interest)

plt.bar(spend_repayment['Months'],spend_repayment['Interest'], color ='red', 
        width = 0.4)

plt.xlabel("Months")
plt.ylabel("Interest")
plt.title("Interest on month basis")
plt.show()



# Task 9: Monthly profit for the bank
monthly_profit = Interest.groupby(['Year','Months']).agg({'Interest': 'sum'}).reset_index()
print(monthly_profit)

plt.bar(spend_repayment['Months'],spend_repayment['Interest'], color ='red', 
        width = 0.4)

plt.xlabel("Months")
plt.ylabel("Profit")
plt.title("Profit on month basis")
plt.show()


# Save data to CSV files
# overspend_customers.to_csv('overspend_customers.csv', index=False)
# monthly_spend.to_csv('monthly_spend.csv', index=False)
# monthly_repayment.to_csv('monthly_repayment.csv', index=False)
# highest_paying_customers.to_csv('highest_paying_customers.csv', index=False)
# segment_spending.to_csv('segment_spending.csv', index=False)
# age_group_spending.to_csv('age_group_spending.csv', index=False)
# most_profitable_segment.to_csv('most_profitable_segment.csv', index=False)
# category_spending.to_csv('category_spending.csv', index=False)
# spend_repayment.to_csv('spend_repayment.csv', index=False)
# monthly_profit.to_csv('monthly_profit.csv', index=False)
Interest.to_csv('Interest.csv', index=False)