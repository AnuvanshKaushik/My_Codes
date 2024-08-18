import numpy as np

print(np.sin(np.pi/2))

arr = np.array([np.pi/2, np.pi/3, np.pi/4, np.pi/5])

print(np.sin(arr))

arr = np.array([90, 180, 270, 360])

print(np.deg2rad(arr))

arr = np.array([np.pi/2, np.pi, 1.5*np.pi, 2*np.pi])

print(np.rad2deg(arr))

print(np.arcsin(1.0))

arr = np.array([1, -1, 0.1])

print(np.arcsin(arr))

base = 3
perp = 4

print(np.hypot(base, perp))