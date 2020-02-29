import os
rootdir = 'D:\learning'

n = 'D:/net1233'
b= 0
for subdir, dirs, files in os.walk(rootdir):
    b += 1
    a = os.path.join(n, subdir[9:]) 
    os.makedirs(a)
    fileold = list(map(lambda x : subdir+'/'+x, files))
    filenew = list(map(lambda x : a+'/'+x, files))

    for i,j in enumerate(fileold):
        with open(j, 'rb') as old:
            data = old.read()
        # command zip zade she file zip she baad zip ro with open konim
        with open(filenew[i], 'wb') as new:
            new.write(data)   



    
