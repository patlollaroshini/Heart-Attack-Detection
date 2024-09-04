import json
import sys
import numpy as np
import pickle

def main():
    
    filename='decision_tree_model.pkl'
    model=pickle.load(open(filename,'rb'))
    scalar=pickle.load(open('scaler.pkl','rb'))
    data=sys.argv[1]
    data=data.split(',')
    for i in range(len(data)):
        data[i]=float(data[i])
    data=np.array(data)
    data=[data]
    data=scalar.transform(data)
    my_prediction = model.predict(data)
    print(my_prediction)
if __name__=="__main__":
    main()