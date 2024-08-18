# x=int(input("enter x \n"))
# y=int(input("enter y \n"))
# print(x**y) #Power of x is y

# i=0
# while i<=5:
#     print(i * "*")
#     i += 1
    
# n=6
# for i in range(1,n):
#     print('\n')
#     for j in range(0,i):
#         print(n-j-1,end='|')
        
        
# n=6
# for i in range(n,0,-1): 
#     print('\n')
#     for j in range(0,i):
#         print(j,end='|')

# i=0
# while i<=100:
#     if(i%5!=0):
#         print(i)
#     i+=1

# i=0
# while True:
#     if(i<101):
        
#         if(i%5!=0):
#             print(i)
#         i+=1
#     else:
#         break
    
# price = 5
# txt = f"To Buying a pandey you give me {price}rs"
# print(txt)

# a=[0,1,2,3,4,5,6,7,8,9,10,3]
# max=a[0]
# min=a[0]
# length=0
# sum=0
# for i in a:
#     if(max<i):
#        max=i 
       
#     if(min>i):
#         min=i
    
#     sum+=i
#     length+=1
        
# print(max,min,length,sum)

# def func1(a):
#     if a in range(90,111):
#         return True
#     if a in range(190,211):
#         return True
#     return False
    
# print(func1(90))
# print(func1(222))

# def func2(a,b):
#     if(a+b==20):
#         return True
#     elif(a==20 or b==20):
#         return True
#     else:
#         return False
        
# print(func2(5,6))
# print(func2(10,10))
# print(func2(20,88))

# def func3(a,b):
#     if(a[0]==b[0]):
#         return True
#     else:
#         return False
# a=input("Enter The name")    
# b=input("Enter The name")
# print(func3(a,b))

# def func4():
#      b=input("Enter a string")
 
#      lst=b.split()
#      print(" ".join(lst[::-1]))
     
 
# func4() 

# n=6
# for i in range(0,n):
#     print('\n')
#     for j in range(0,i+1):
#         print(2*i+1,end='|')
        
# n=6
# for i in range(0,n):
#     print('\n')
#     for j in range(0,i+1):
#         print(i-j+1,end='|')

# def pat3(n):
#     for i in range(n):
#         for j in range(n-i-1):
#             print(end="  ")
#         for j in range(i+1):
#             print(j+1,end=" ")
#         print()
# n=int(input("Enter the number : "))
# pat3(n)

# class Animal:
#     def __init__(self):
#         print("Animal created")
        
#     def whoAMI(self):
#         print("Animal")
        
#     def eat(self):
#         print("Eating")
    
# class Dog:
#     def __init__(self):
#         Animal.__init__(self)
#         print("Dog created")
        
#     def whoAMI(self):
#         print("Dog")
        
        
#     def eat(self):
#         print("Woof")
        
# # d=Dog()
# # print(d.whoAMI())
# import numpy as np
# import matplotlib as mtp
# from matplotlib import pyplot as plt
# img=plt.imread(r"C:\Users\kaush\Downloads\WhatsApp Image 2024-07-05 at 19.27.51_df33440f.jpg")
# plt.imshow(img)
# plt.show()

import tensorflow as tf
