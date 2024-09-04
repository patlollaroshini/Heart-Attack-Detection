import React from 'react'
import "./About.css"
import axios from "axios";

function about ()  {
  return (
    <section id="id221" >
      <div id="new221">
        <br />
      <h1 className="title">Heart Attack Analysis Data</h1>
      <div className="content">
        <p><b>Age:</b> displays the age of the individual.</p>
        <p><b>Sex:</b> displays the gender of the individual using the following format:</p>
        <ul>
          <li> male</li>
          <li> female</li>
        </ul>
        <p><b>Chest-pain type:</b> displays the type of chest-pain experienced by the individual using the following format:</p>
        <ul>
          <li>1 = typical angina</li>
          <li>2 = atypical angina</li>
          <li>3 = non-anginal pain</li>
          <li>4 = asymptomatic</li>
        </ul>
        <p><b>Resting Blood Pressure:</b> displays the resting blood pressure value of an individual in mmHg (unit)</p>
        <p><b>Serum Cholesterol:</b> displays the serum cholesterol in mg/dl (unit)</p>
        <p><b>Fasting Blood Sugar:</b> compares the fasting blood sugar value of an individual with 120mg/dl.</p>
        <p>If fasting blood sugar &gt; 120mg/dl then : 1 (true), else : 0 (false)</p>
        <p><b>Resting ECG:</b> displays resting electrocardiographic results</p>
        <ul>
          <li> normal</li>
          <li> having ST-T wave abnormality</li>
          <li>left ventricular hypertrophy</li>
        </ul>
        <p><b>Max heart rate achieved:</b> displays the max heart rate achieved by an individual.</p>
        <p><b>Exercise induced angina:</b></p>
        <ul>
          <li> yes</li>
          <li> no</li>
        </ul>
        <p><b>ST depression induced by exercise relative to rest:</b> displays the value which is an integer or float.</p>
        <p><b>Peak exercise ST segment:</b></p>
        <ul>
          <li> upsloping</li>
          <li> flat</li>
          <li>downsloping</li>
        </ul>
        <p><b>Number of major vessels (0–3) colored by fluoroscopy:</b> displays the value as integer or float.</p>
        <p><b>Thal:</b> displays the thalassemia:</p>
        <ul>
          <li> normal</li>
          <li> fixed defect</li>
          <li>reversible defect</li>
        </ul>
       
        <ul className="about-us-list">
        <li>
          <strong>Age:</strong> Age is the most important risk factor in developing cardiovascular or heart diseases, with approximately a tripling of risk with each decade of life. Coronary fatty streaks can begin to form in adolescence. It is estimated that 82 percent of people who die of coronary heart disease are 65 and older. Simultaneously, the risk of stroke doubles every decade after age 55.
        </li>
        <li>
          <strong>Sex:</strong> Men are at greater risk of heart disease than pre-menopausal women. Once past menopause, it has been argued that a woman’s risk is similar to a man’s although more recent data from the WHO and UN disputes this. If a female has diabetes, she is more likely to develop heart disease than a male with diabetes.
        </li>
        <li>
          <strong>Angina (Chest Pain):</strong> Angina is chest pain or discomfort caused when your heart muscle doesn’t get enough oxygen-rich blood. It may feel like pressure or squeezing in your chest. The discomfort also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion.
        </li>
        <li>
          <strong>Resting Blood Pressure:</strong> Over time, high blood pressure can damage arteries that feed your heart. High blood pressure that occurs with other conditions, such as obesity, high cholesterol or diabetes, increases your risk even more.
        </li>
        <li>
          <strong>Serum Cholesterol:</strong> A high level of low-density lipoprotein (LDL) cholesterol (the “bad” cholesterol) is most likely to narrow arteries. A high level of triglycerides, a type of blood fat related to your diet, also ups your risk of a heart attack. However, a high level of high-density lipoprotein (HDL) cholesterol (the “good” cholesterol) lowers your risk of a heart attack.
        </li>
        <li>
          <strong>Fasting Blood Sugar:</strong> Not producing enough of a hormone secreted by your pancreas (insulin) or not responding to insulin properly causes your body’s blood sugar levels to rise, increasing your risk of a heart attack.
        </li>
        <li>
          <strong>Resting ECG:</strong> For people at low risk of cardiovascular disease, the USPSTF concludes with moderate certainty that the potential harms of screening with resting or exercise ECG equal or exceed the potential benefits. For people at intermediate to high risk, current evidence is insufficient to assess the balance of benefits and harms of screening.
        </li>
        <li>
          <strong>Max Heart Rate Achieved:</strong> The increase in cardiovascular risk, associated with the acceleration of heart rate, was comparable to the increase in risk observed with high blood pressure. It has been shown that an increase in heart rate by 10 beats per minute was associated with an increase in the risk of cardiac death by at least 20%, and this increase in the risk is similar to the one observed with an increase in systolic blood pressure by 10 mm Hg.
        </li>
        <li>
          <strong>Exercise Induced Angina:</strong> The pain or discomfort associated with angina usually feels tight, gripping or squeezing, and can vary from mild to severe. Angina is usually felt in the center of your chest but may spread to either or both of your shoulders, or your back, neck, jaw or arm. It can even be felt in your hands. Types of Angina: a. Stable Angina / Angina Pectoris b. Unstable Angina c. Variant (Prinzmetal) Angina d. Microvascular Angina.
        </li>
        <li>
          <strong>Peak exercise ST segment:</strong> A treadmill ECG stress test is considered abnormal when there is a horizontal or down-sloping ST-segment depression ≥ 1 mm at 60 to 80 ms after the J point. Exercise ECGs with up-sloping ST-segment depressions are typically reported as an equivocal test. In general, the occurrence of horizontal or down-sloping ST-segment depression at a lower workload (calculated in METs) or heart rate indicates a worse prognosis and higher likelihood of multi-vessel disease. The duration of ST-segment depression is also important, as prolonged recovery after peak stress is consistent with a positive treadmill ECG stress test. Another finding that is highly indicative of significant CAD is the occurrence of ST-segment elevation > 1 mm (often suggesting transmural ischemia); these patients are frequently referred urgently for coronary angiography.

        </li>
        <li>
          <strong>Number of Major Vessels (Coronary Angiography) </strong> refers to the count of coronary arteries that show significant narrowing or blockage. This measurement is typically obtained through coronary angiography, which provides a detailed view of the coronary arteries. Here’s how it’s measured:

Measuring the Number of Major Vessels:

	<ul><li>1.	Coronary Angiography:
		A catheter is inserted into a blood vessel and guided to the coronary arteries.
		A contrast dye is injected, and X-ray images are taken to visualize the arteries.</li>
    <li>2.	Identification of Vessels:
		The major coronary arteries include the Left Anterior Descending (LAD), Left Circumflex (LCX), and Right Coronary Artery (RCA).
		Sometimes, additional branches like the diagonal or obtuse marginal branches are also assessed.
	</li><li>3.	Assessment of Blockages:
		Each artery is examined for blockages (stenosis).
		A significant blockage is usually defined as a narrowing of 50% or more in the diameter of the vessel.
	</li><li>4.	Counting the Vessels:
		The number of major vessels with significant stenosis is counted.
		The possible values are usually between 0 and 3, where “0” means no significant blockages, and “3” indicates blockages in all three major coronary arteries.
      </li></ul>
	 </li>
     <li>
          <strong>Thalassemia:</strong> Thalassemia refers to a group of inherited blood disorders affecting hemoglobin production. In the context of heart-related conditions and ECG (Electrocardiogram) results, “Thalassemia” is often used more broadly to categorize certain heart conditions related to thallium stress tests or nuclear imaging tests. These tests measure blood flow to the heart during exercise and at rest, assessing for defects or abnormalities.
        </li>
        <li>
          <strong>ST Depression 0-6.2:</strong> typically refers to the measurement of the degree of ST segment depression on an ECG, expressed in millimeters. This range indicates how much the ST segment dips below the baseline, with 0 being no depression and 6.2 being significant depressio</li>
      
      </ul>
      
      </div>
      
    </div>
   
    </section>
  );
}

export default about
