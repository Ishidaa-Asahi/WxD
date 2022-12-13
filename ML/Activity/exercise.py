import pandas as pd

data=pd.read_csv('exercise_dataset.csv')

#print(data)
activities=data['Activity, Exercise or Sport (1 hour)']
print(activities)

weight = 80

cal_perday = 136


target_weight = int(input ('enter your target weight'))
target_week = int(input('enter your target no.of.weeks'))

reduce_weight = weight-target_weight

weight_perweek_loss = reduce_weight / target_week

#for 1kg loss per week burn 1200 cals more than you eat

cal_burn_perday = cal_perday + 1200 * weight_perweek_loss

print('cbpd: ',cal_burn_perday)

o = round(cal_burn_perday / 100)
round_cbpd = (o * 100) + 100

print('cbpdr: ', round_cbpd)

if weight >= 45 and weight <= 65:
    print('col1')
    if round_cbpd <= 800:
        
elif weight >= 65 and weight <= 75:
    print('col2')
elif weight >= 75 and weight <= 85:
    print('col3')
    col3 = data['180 lb']
    l3 = []
    l3 = col3.tolist()
    print(l3)
elif weight >= 85 and weight <= 95:
    print('col4')
    
