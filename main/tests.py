from django.test import TestCase

# Create your tests here.

ffile = open("C:/Users/kadirkaragoz/Desktop/unistripfull.txt", 'w', encoding='UTF8')
with open("C:/Users/kadirkaragoz/Desktop/uninonstrip.txt", 'r', encoding='UTF8') as f:
    for line in f.readlines():
        linex = line.strip()
        ffile.write(linex + '\n')
#    if line.find('(İngilizce)'):
#        line.replace('(İngilizce)', 'İngilizce')
#        f.write(line)
ffile.close()