---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## CS ADC / CS TCU
### Departures

Auto Release is not Available in Cairns  

All Departing Aircraft must be coordinated to CS TCU with a "Next" Call

!!! example
    **CS ADC** -> **CS TCU**: "Next, ABC"  
    **CS TCU** -> **CS ADC**: "ABC, Heading 030, Unrestricted"  
    **CS ADC** -> **CS TCU**: "Heading 030, Unrestriced, ABC"  
    **CS ADC** -> **ABC**: "ABC, Assigned heading Left 030, Runway 15, Cleared for Takeoff"  
    **ABC** -> **CB ADC**: "Left heading 030, Runway 15, Cleared for Takeoff, ABC"  
    `AIP GEN 3.4`

### Seperation
CS ADC shall notify Approach and Departure when:  
a) ADC is unable to visually separate traffic;  
b) When ADC is able to resume visually separating traffic.   

### Missed Approach

When weather conditions prevent the application of visual separation between a departure and a missed approach by tower:  
a) ADC must advise TCU  
b) Approach must limit departure headings to the following:  

| Runway | Jet | Non-Jet
| ----------- | ------ | ---------|
| 15          | 030°  | 030°  |
| 33          | - | 330°  |

## CS ACD / CS TCU

The controller assuming responsibility of **CS ACD** shall give heads-up coordination to the relevant CS TCU controller prior to the issue of the following clearances:  
a) VFR Departures  
b) Aircraft using a runway not on the ATIS

!!! example
    **CS ACD** -> **CS TCU**: "ABC, Requesting clearance for a Northbound VFR Coastal departure at A035"  
    **CS TCU** -> **CS ACD**: "ABC, Cleared for a Northbound VFR Coastal departure, A035"  
    **CS ACD** -> **CS TCU**: "Cleared for a Northbound VFR Coastal departure, A035, ABC"  
    **CS ACD** -> **ABC**: "ABC, Cleared for a Northbound VFR Coastal departure, A035, Squawk 3601"  
    **ABC** -> **CS ACD**: "Cleared for a Northbound VFR Coastal departure, A035, 3601, ABC"  

## CS FLW / CS ADC

FLW must advise ADC of any sequence changes within 36 Miles CS.  
FLW must advise ADC of aircraft sequenced for Runway 30.  
All requests for non-duty runway arrivals must be approved by ADC.

## Standard Assignable Departure Levels

All Aircraft: `A060` or `RFL` if lower