from PIL import Image

def crop_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Get the bounding box of the non-zero alpha pixels
    bbox = img.getbbox()
    
    if bbox:
        # Crop the image to the bounding box
        img_cropped = img.crop(bbox)
        img_cropped.save(output_path, "PNG")
        print(f"Cropped {input_path} and saved to {output_path}")
    else:
        print(f"No non-transparent pixels found in {input_path}")

crop_transparent("public/ladi-3-transparent.png", "public/ladi-3-cropped.png")
crop_transparent("public/ladi-4-transparent.png", "public/ladi-4-cropped.png")
