from PIL import Image
import os.path
maxwidth = 0
maxheight = 0
for i in range(26):
    image = str(i)+'.png'
    if i == 25: image = "25.gif"
    filename = os.path.join(image)
    img = Image.open(filename)
    width = img.width
    height = img.height
    print(image)
    print("width:", width)
    print("height:", height)
    if width >= maxwidth:maxwidth = width
    if height >= maxheight:maxheight = height
    print("--")

print("maxwidth :", maxwidth )
print("maxheight:", maxheight)
