#Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor

numero1 = float(input("Ingrese el primer número: "))
numero2 = float(input("Ingrese el segundo número: "))


if numero1 > numero2:
    print("El primer número", numero1, "es mayor que el segundo número", numero2)
    print("El segundo número", numero2, "es menor que el primer número", numero1)
elif numero2 > numero1:
    print("El segundo número", numero2, "es mayor que el primer número", numero1)
    print("El primer número", numero1, "es menor que el segundo número", numero2)
else:
    print("Ambos números son iguales")
