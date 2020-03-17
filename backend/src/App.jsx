import React, { useState, useEffect } from "react";

import * as faceapi from "face-api.js"; // npm i face-api.js
import '@tensorflow/tfjs-node'; // npm i face-api.js canvas @tensorflow/tfjs-node

export default function App () {



  // This loads the models 
  useEffect(() => {
		faceapi.nets.faceLandmark68Net
			.loadFromUri("/models")
			.then(error => console.log("FaceLandmark Model Loaded", error));
		faceapi.nets.ssdMobilenetv1
			.loadFromUri("/models")
			.then(error => console.log("ssdMobilenetv1 Model Loaded", error));
		faceapi.nets.faceExpressionNet
			.loadFromUri("/models")
			.then(error => console.log("FaceExpression Model Loaded", error));
	}, []);

  


}




