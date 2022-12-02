---
  title: Procedures
---

--8<-- "includes/abbreviations.md"

## HF Radio

HF radio is used as the primary long-range radio communications medium. The nature of HF radio makes it highly vulnerable to atmospheric distortion and noise, and so radiotelephony (R/T) procedures on HF tend to be more formal in order to maximise clarity.

!!! Example
    **UAL873**: "San Francisco Radio, San Francisco Radio, UAL873 on 122.5"  
    **ZAK_FSS**: "UAL873, San Francisco Radio, go-ahead"  
    **UAL873**: "San Francisco Radio, UAL873 request climb FL390"

## SELCAL

Given the background noise level experienced on HF radio frequencies, flight crews usually prefer to turn down the audio level of their HF receiver. SELCAL uses a unique 4-letter code for each aircraft (eg. QR-AC) transmitted over the communications frequency to sound an alert for the flight crew.

Controllers must check each aircraft’s flight plan for a discrete SELCAL code. If aircraft have nominated a discrete code (for example `QR-AC`), then a SELCAL Check shall be completed.

!!! Example
    **BN-TSN_FSS**: "QFA43 good afternoon, Brisbane accepts primary guard 128.6, secondary 122.1, standby SELCAL check."  
    *The aircraft awaits the SELCAL check before replying.*  
    **QFA43**: "SELCAL check OK, secondary 122.1, QFA43."  
    **BN-TSN_FSS**: "QFA43, request your estimate VIROG."  

After the SELCAL check has been completed, controllers must preface all communications to that aircraft with a SELCAL prompt.

## Position Reports

A Position Report will contain the following elements:  
- Callsign  
- Position & Time  
- Flight level  
- Next position and time over   
- Ensuing significant point   
- Specified Speed (if assigned)

!!! Note
    If after making a position report an estimate has changed by more than 2 minutes, the new estimate shall be passed to ATC.  

If an aircraft fails to report its position within 3 minutes of its estimated time, controllers must attempt to establish contact with that aircraft and obtain a position report.

ATC shall acknowledge a position report by using the aircraft's callsign. A readback of the report is not required.

!!! Example
    **UAL873**: "San Francisco Radio, San Francisco Radio, UAL873 Position"  
    **ZAK_FSS**: "UAL873, San Francisco Radio, go-ahead"  
    **UAL873**: "UAL873 position LHI time 1853, FL360, estimate PANDA at 1953, SANDO next. Maintaining Mach 0.84”  
    **ZAK_FSS**: "UAL873, San Francisco Radio, Copied Position" 
    
## Simulator Time Compression
Due to the length of most oceanic crossings, some pilots may elect to use time compression to speed up their cruise segment.  Controllers should accommodate this request where possible.

!!! note
    Time compression is not available within 20 minutes of a domestic sector.

Aircraft using time compression must be assigned the following levels for separation with other traffic:  

| Sim Rate | Eastbound  | Westbound |
| ----------------| --------- | -------- |
| 2x   | FL390     | FL380 |
| 4x | FL410 | FL400 |

## Coordination
As per [Standard Coordination Rules](../../controller-skills/coordination), all aircraft must be voice coordinated prior to an airspace boundary.  

Coordination with domestic sectors must be completed at least **15 minutes** prior to the boundary.  Coordination with other oceanic sectors must be completed at least **30 minutes** prior to the boundary.

!!! note
    The sector boundary between Australian and New Zealand oceanic sectors is treated as a domestic sector for the purposes of coordination, so aircraft must be coordinated at least **15 minutes** prior to the boundary.

!!! example
    <span class="coldline">**BN-TSN_FSS** -> **NZZO_FSS**</span>: "Estimate ANZ52, EGATO 0243, FL370"  
    <span class="coldline">**NZZO_FSS** -> **BN-TSN_FSS**</span>: "FL370, ANZ52"

Any change or request regarding an aircraft which has already been coordinated with the sector must be further coordinated before being issued.  

!!! example
    <span class="coldline">**BN-TSN_FSS** -> **ARL**</span>: "Via AKALU, QFA122, request descent FL310 due weather"  
    <span class="coldline">**ARL** -> **BN-TSN_FSS**</span>: "Concur, QFA122, FL310"  
    <span class="coldline">**BN-TSN_FSS** -> **ARL**</span>: "QFA122, FL310"