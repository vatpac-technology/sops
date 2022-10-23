---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## AS ADC / ENR

### Taxi Call
A taxi call shall be made between AS TWR and ML CTR as an aircraft is given taxi clearance. Center will respond by acknowledging the callsign and activating FDR.

!!! example
    **AS_TWR** -> **ML-ASP_CTR**: "Taxis QFA797 for YMML via IDANU"  
    **ML-ASP_CTR** -> **AS_TWR**: "QFA797"  

### Next Call
A next call is made for all aircraft when they are next to depart and will be departing within two minutes. Center will respond by either acknowledging the callsign or offering a higher level. Any higher level issued will be passed along in the takeoff clearance. If the controller is in a high workload environment, a next call may be omitted, in favour of taxi and departure coordination.

!!! example
    **AS_TWR** -> **ML-ASP_CTR**: "Next QFA797"  
    **ML-ASP_CTR** -> **AS_TWR**: "QFA797"    

### Departure Call
A departure call should be made as the aircraft becomes airborne. If not already issued, CTR will issue a higher level. The aircraft should be transferred to CTR as they climb through the upper level of the AS class D airspace.

!!! example
    **AS_TWR** -> **ML-ASP_CTR**: "Departure QFA797 at 06"  
    **ML-ASP_CTR** -> **AS_TWR**: "QFA797, FL360"
    **AS_TWR** -> **ML-ASP_CTR**: "FL360, QFA797" 
### Arrival Coordination
ML-ASP_CTR will coordinate all arrivals into Alice Springs Prior to handing over to tower in the following format:

- Callsign & Aircraft Type
- Estimate
- Inbound Radial/Procedure
- Assigned Level
- Sequence Number (if applicable)

!!! example
    **ML-ASP_CTR** -> **AS_TWR**: "JST734, A320, estimates Alice Springs 52, 189 radial, 5000ft, number 2”
    **AS_TWR** -> **ML-ASP_CTR**: "JST734"