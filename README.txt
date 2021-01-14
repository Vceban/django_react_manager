		basic Rest API
pip3 install django djangorestframework django-rest-knox
django-admin startproject projectname
python3 manage.py startapp appname
		implementing React
python3 manage.py startapp frontend
Mkdir -p ./frontend/src/components
Mkdir -p ./frontend/{static,templates}/frontend

===

npm install -D webpack webpack-cli
npm install -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-propreties
npm install react react-dom prop-types
npm run dev

//npm install redux react-redux redux-thunk redux-devtools-extension