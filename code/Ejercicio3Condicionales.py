#Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos.
num1 = int(input("Ingrese el primer número entero positivo: "))
num2 = int(input("Ingrese el segundo número entero positivo: "))
num3 = int(input("Ingrese el tercer número entero positivo: "))


menor = min(num1, num2, num3)
mayor = max(num1, num2, num3)


print("El menor número es:", menor)
print("El mayor número es:", mayor)
