from flask import Flask, request, send_file, jsonify
import os
import lxml.etree as ET
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "static/styles"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def transform_xml_to_style(xml_string, output_file, xslt_file):
    """
    Generic function to transform XML to CSS or SCSS using an XSLT file.
    """
    xslt_tree = ET.parse(xslt_file)
    transform = ET.XSLT(xslt_tree)

    # Convert XML string to bytes before parsing
    xml_tree = ET.fromstring(xml_string.encode("utf-8"))
    result_tree = transform(xml_tree)

    with open(output_file, "w") as f:
        f.write(str(result_tree))


@app.route("/convert/css", methods=["POST"])
def convert_to_css():
    try:
        data = request.get_json()
        if not data or "xml" not in data:
            return jsonify({"error": "No XML data provided"}), 400

        xml_string = data["xml"]
        output_path = os.path.join(OUTPUT_FOLDER, "output.css")
        xslt_file = "transform.xsl"

        transform_xml_to_style(xml_string, output_path, xslt_file)

        return send_file(output_path, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/convert/scss", methods=["POST"])
def convert_to_scss():
    try:
        data = request.get_json()
        if not data or "xml" not in data:
            return jsonify({"error": "No XML data provided"}), 400

        xml_string = data["xml"]
        output_path = os.path.join(OUTPUT_FOLDER, "output.scss")
        xslt_file = "transform_scss.xsl"

        transform_xml_to_style(xml_string, output_path, xslt_file)

        return send_file(output_path, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
