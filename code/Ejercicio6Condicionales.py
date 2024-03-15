#Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos

A = 5
B = -3

if A < 0 or B < 0:
    resultado = A + B
    print("Al menos uno de los números es negativo, la suma es:", resultado)
else:
    resultado = A * B
    print("Ambos números son positivos, la multiplicación es:", resultado)