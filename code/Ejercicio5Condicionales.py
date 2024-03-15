#Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible.

A= 10
B = 2

# Verificar si B es distinto de cero
if B != 0:
    cociente = A / B
    print("El cociente de A entre B es:", cociente)
else:
    print("La división no es posible, ya que el divisor (B) es cero")
