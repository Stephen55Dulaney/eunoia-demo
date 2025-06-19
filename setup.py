from setuptools import setup, find_packages

setup(
    name="eunoia-demo",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'flask',
        'flask-sqlalchemy',
        'flask-login',
        'flask-migrate',
        'python-dotenv',
        'pika',
    ],
) 