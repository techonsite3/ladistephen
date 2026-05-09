from PIL import Image

def remove_dark_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for r, g, b, a in data:
        # Calculate relative luminance
        lum = (r * 0.299 + g * 0.587 + b * 0.114)
        
        # The background is dark navy. We want to keep the gold.
        # We can scale the alpha so dark pixels become transparent.
        # Background lum is around 10-20. Gold is > 100.
        if lum < 35:
            # Completely transparent for pure background
            new_data.append((r, g, b, 0))
        else:
            # Soft edge for anti-aliasing
            alpha = int(min(255, max(0, (lum - 30) * 8)))
            # Boost the color slightly to compensate for any dark mix
            new_data.append((r, g, b, alpha))

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_dark_bg("public/ladi-3.png", "public/ladi-3-transparent.png")
    remove_dark_bg("public/ladi-4.png", "public/ladi-4-transparent.png")
