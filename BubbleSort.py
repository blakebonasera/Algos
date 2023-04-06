# def BubbleSort(arr):
#     arr = [2,4,1,5,3]
#     for x in len(arr):
#         for i in len(arr):
#             if arr[i]> arr[x]:
#                 temp = arr[i]
#                 arr[i] = arr[i+1]
#                 arr[i + 1] = temp

def bubble(arr):
    n = len(arr)
    swapped= False

    for i in range(n-1):
        for x in range(0,n-i-1):
            if arr[x] > arr[x + 1]:
                swapped = True
                arr[x], arr[x + 1] = arr[x + 1], arr[x]
        if not swapped:
            return
        
arr = [5,4,2,3,1]

bubble(arr)

print("Sorted array is:")
for i in range(len(arr)):
    print(" % d" % arr[i], end = " ")