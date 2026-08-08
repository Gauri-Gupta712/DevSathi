"""
Run this ONCE to download TinyLlama to D: drive.
After this finishes, you never need to run it again.
"""
import os
os.environ["HF_HOME"] = "D:\\hf_cache"
os.environ["TRANSFORMERS_CACHE"] = "D:\\hf_cache"

from huggingface_hub import snapshot_download

print("Downloading TinyLlama to D:\\hf_cache ...")
print("This is a one-time download of ~2.2GB. Please wait...\n")

snapshot_download(
    repo_id="TinyLlama/TinyLlama-1.1B-Chat-v1.0",
    cache_dir="D:\\hf_cache"
)

print("\n✅ Download complete! TinyLlama is saved to D:\\hf_cache")
print("You can now run: uvicorn api_server:app --reload --port 8000")
