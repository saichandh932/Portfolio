import os
import fitz  # PyMuPDF

def convert_pdf_to_img(pdf_path, output_dir):
    try:
        # Open the PDF
        doc = fitz.open(pdf_path)
        if len(doc) == 0:
            return
        
        # Get the first page
        page = doc[0]
        
        # Render the page to a pixmap (image)
        # Increase the resolution by setting matrix scaling
        zoom = 2.0
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        
        # Output filename
        base_name = os.path.basename(pdf_path)
        name_without_ext = os.path.splitext(base_name)[0]
        out_name = f"{name_without_ext}.jpg"
        out_path = os.path.join(output_dir, out_name)
        
        # Save image
        pix.save(out_path)
        print(f"Converted {base_name} to {out_name}")
        
    except Exception as e:
        print(f"Error converting {pdf_path}: {e}")

def main():
    base_dir = os.path.abspath(os.path.dirname(__file__))
    cisco_dir = os.path.join(base_dir, 'public', 'cisco cert')
    images_dir = os.path.join(base_dir, 'public', 'images')
    output_dir = os.path.join(base_dir, 'public', 'images', 'certs')

    os.makedirs(output_dir, exist_ok=True)

    # Process cisco cert dir
    if os.path.exists(cisco_dir):
        for f in os.listdir(cisco_dir):
            if f.lower().endswith('.pdf') and 'RESUME' not in f.upper():
                pdf_path = os.path.join(cisco_dir, f)
                convert_pdf_to_img(pdf_path, output_dir)
                
    # Process images dir (e.g. NPTEL certs)
    if os.path.exists(images_dir):
        for f in os.listdir(images_dir):
            if f.lower().endswith('.pdf') and 'RESUME' not in f.upper():
                pdf_path = os.path.join(images_dir, f)
                convert_pdf_to_img(pdf_path, output_dir)
                
if __name__ == '__main__':
    main()
