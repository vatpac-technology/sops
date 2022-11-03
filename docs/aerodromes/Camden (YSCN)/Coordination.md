---
  title: Coordination
---

--8<-- "includes/abbreviations.md"

## CN SMC & TWR / SY TCU

### Taxi Call

Whilst the aircraft is taxiing, the Ground Controller Coordinate with the controller responsible for Sydney Departures South (SDS).
In response to a taxiies call, SY TCU will issue a squawk code.

CN TWR must advise SY TCU when the aircraft has called 'Ready'.
In response to a ready call, SY TCU will issue a traffic statement.

!!! example
    **CN TWR** -> **SY TCU**: "Taxi's, MHQ, Lord Howe, Runway 06”  
    **SY TCU** -> **CN TWR**: “MHQ, Squawk 0134" 

    **CN TWR** -> **SY TCU**: "Ready, MHQ, Runway 06"  
    **SY TCU** -> **CN TWR**: “MHQ, Traffic is MEH, an IFR AC50, tracking SHL RAKSO BKWI, 3500ft, Estimate RAKSO time 35" (or "No Reported IFR Traffic")  
    **CN TWR** -> **SY TCU**: "Traffic is MEH tracking SHL RAKSO BKWI 3500ft, RAKSO at 35"  
    **CN TWR** -> **MHQ**: "Traffic is MEH, IFR AC50 tracking SHL RAKSO BKWI at 3500ft, Estimating RAKSO at 35, Runway 06 Cleared For Take-Off"  
      
    **CN_TWR** -> **MHQ**: "Contact Sydney Departures on XXX.XX>"  

!!! note
    Note: Because aircraft enter Class G after departure, an airways clearance need not be issued by CN TWR. This will be done on first contact with Sydney TCU.
    Therefore, a next call & departure instructions (unrestricted) are not required. You must however, pass the above (ready) coordination & obtain a traffic statement.


## SY TCU / CN TWR

### Arrival Coordination

#### Intrument Approaches

SY TCU must advise CN Tower of the aircraft's EAT (Estimated Approach Time) at least 10 minutes prior to the EAT at SCNWI for the RNP W approach.

SY TCU must transfer the aircraft at SCNWI for the RNP W approach.
Prior to transfer, SY TCU must provide the aircraft with a traffic statement and advise "identification terminated".

CN TWR is responsible for issuing a clearance into the CN CTR and for coordination with SY TCU in the event of a missed approach (or on completion of airwork if applicable).

SY TCU will **NOT** clear the aircraft for the approach.

!!! example
    **SY TCU** -> **CN ADC**: “EAT, HRP via RNP W at time 59”  
    **BK ADC** -> **SY TCU**: “HRP, RNP W”   


#### Visual Tracking

SY TCU must coordinate the Estimate and approximate inbound track for IFR aircraft. Where possible, pass the Estimate no later than 10 minutes prior.

!!! example
    **SY TCU** -> **BK ADC**: “Estimate, TJV via RIC time 02.”  
    **BK ADC** -> **SY TCU**: “TJV” 


## IFR overflying YSCN

SY TCU must advise CN TWR of observed IFR aircraft overflying CN CTR below 2500ft.