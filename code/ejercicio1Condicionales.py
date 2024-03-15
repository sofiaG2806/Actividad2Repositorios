#Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.

numero = float(input("Ingrese un número: "))

if numero > 0:
    print("El número ingresado es positivo")
elif numero < 0:
    print("El número ingresado es negativo")
else:
    print("El número ingresado es cero")
