---
  title: Perth (YPPH)
---

--8<-- "includes/abbreviations.md"

## Positions
| Name | Callsign | Frequency | Login ID |
| ---- | -------- | --------- | -------- |
| **Perth ADC** | **Perth Tower** | **127.400** | **PH_TWR** |
| **Perth SMC West** | **Perth Ground** | **121.700** | **PH_GND** |
| <span class="indented">Perth SMC East :material-information-outline:{ title="Non-standard position"} | Perth Ground | 122.200 | PH-E_GND |
| **Perth ACD** | **Perth Delivery** | **118.550** | **PH_DEL** |
| **Perth ATIS** |  | **123.800** | **YPPH_ATIS** |

!!! abstract "Non-Standard Positions"
    :material-information-outline: Non-standard positions may only be used in accordance with [VATPAC Air Traffic Services Policy](https://vatpac.org/publications/policies){target=new}.  
    Approval must be sought from the **bolded parent position** prior to opening a Non-Standard Position, unless [NOTAMs](https://vatpac.org/publications/notam){target=new} indicate otherwise (eg, for events).

## Airspace
PH ADC is not responsible for any airspace by default.

## Maneuvering Area Responsibility
The area of responsibility between SMC West and East is divided by Runway 03/21.  
Everything West of the Runway belongs to SMC West, everything East of the Runway belongs to SMC East.

## Runway Selection
### Southwest Plan
With the Southwest Plan active, all departures shall be assigned runway 21. Arrivals will be processed to either runway 21 or 24.

### Northeast Plan
With the Northeast Plan active, departures via `AVNEX`, `OTLED`, `OLMAM`, `SOLUS`, and `OPEGA` shall be assigned runway 03. All other departures shall be assigned runway 06. All arrivals will be processed to runway 03.

### Single Runway Ops
Where excessive crosswind components exist on a runway in the southwest or northeast runway modes, nominate the most into wind runway as a single runway mode.

## Circuit Training
Circuit training traffic shall be issued SSR code and clearance to operate within circuit area not above `A015`. Circuit training is typically conducted on Runway 03/21.

All circuits are to be conducted to the east of Runway 03/21 (right-hand circuit Runway 03).

## Helicopter Operations
There are no helipad facilities at YPPH. Helicopters should be issued an airways clearance in accordance with the fixed-wing operation applicable to their flight rules (i.e. SID for IFR helicopters, VFR departure via appropriate VFR route if necessary for VFR helicopters). Helicopters should be cleared to takeoff/land from runways or taxiways, as deemed appropriate by ADC. The point of takeoff/landing must be specified by ADC.

!!! phraseology
    **PH ADC:** "YOE, taxiway Romeo, cleared to land"  

    **PH ADC:** "HWD, runway 21, cleared for takeoff"

## Scenic Flights
When traffic permits, VFR scenic flights over Perth are cleared via VICTOR 65 route (`CTE-PCTY-HKE`). Coordination with PH TCU is required prior to issuing this clearance, see [ACD to PH TCU](#acd-to-ph-tcu).

## ATIS
### Operational Info
#### ACD Pushback Requests
When implementing the [Pushback Requests on ACD](#pushback-requests-on-acd) procedure, the OPR INFO shall include:  
`ALL DEPARTURES MUST REQUEST PUSH BACK ON 118.55`  

### Approach Type
With the [Southwest Plan](#southwest-plan) active, the ATIS shall notify `EXP ILS APCH`.

With the [Northeast Plan](#northeast-plan) active, the ATIS shall notify `EXP ILS APCH` only in the following conditions:

- By night; or  
- Cloud base of `A032` or below

### Runway Nomination
When both Runway 03 and Runway 06 are nominated as departure runways, the `RWY` field shall contain:  
`03 FOR ARR. RWY 03 FOR DEP VIA OTLED, AVNEX, OLMAM, SOLUS AND OPEGA. RWY 06 FOR ALL OTHER DEP.`

## Workload Management
### Pushback Requests on ACD
To mitigate this, pushback requests may be done on **ACD** frequency, to balance the workload. A few steps must be followed to properly execute this procedure.

To commence the procedure:

1. **SMC** and **ACD** coordinate to implement the procedure, due to high **SMC** workload.
2. **SMC** coordinates with **ADC** in order to have the [ATIS](#acd-pushback-requests) updated.
3. **ACD** places the `STANDBY FOR GROUND` bar in the **Cleared Bay** in [OzStrips](../../client/towerstrips.md#coordinator).

!!! phraseology
    <span class="hotline">**PH SMC** -> **PH ACD**</span>: "It's getting quite busy. Happy to implement Pushback requests on your frequency?"  
    <span class="hotline">**PH ACD** -> **PH SMC**</span>: "Understood, affirm"  
    <span class="hotline">**PH SMC** -> **PH ACD**</span>: "Thanks, I'll talk to Tower"  
    <span class="hotline">**PH SMC** -> **PH ADC**</span>: "Can we please get `ALL DEPARTURES MUST REQUEST PUSH BACK ON 118.55` on the ATIS?"  
    <span class="hotline">**PH ADC** -> **PH SMC**</span>: "Wilco"  

To operate with pushback requests on ACD:

1. When **ACD** has finished issuing an airways clearance, they will **remind** pilots to *"Contact me when ready for pushback"*.
2. When a pilot requests pushback, **ACD** will assess their priority based on apron congestion and number of aircraft in the queue (see [Queue Management](#queue-management)).  
3. **ACD** will either instruct them to **standby for Ground** *(not contact)*, or remain on the ACD frequency if a delay is required.  
4. If an aircraft is instructed to 'standby for Ground', **ACD** will move the strip below the **Standby for Ground** bar in the **Queue** section of the **Cleared Bay** in [OzStrips](../../client/towerstrips.md#coordinator), to denote they are awaiting pushback approval.  
5. When **SMC** has adequate space on the aprons, taxiways, and holding point, they will issue pushback/taxi to the next aircraft in line by scanning the [Cleared Queue bay](../../../client/towerstrips/#stripboard).

The decision whether or not to send an aircraft to SMC or hold them on the ACD frequency should be made in accordance with the [Queue Management](#queue-management) techniques.

!!! warning "Important"
    If SMC needs to reduce the pushback rate due to congestion at the holding points or excessive workload, **ACD** should be informed without delay, and instructed to hold all departures on their frequency. This will stop aircraft being told to 'standby for ground' on the SMC frequency. Remember to cancel this requirement when congestion eases.

!!! phraseology
    **VOZ1725:** "Perth Delivery, VOZ1725, PDC read back"  
    **PH ACD:** "VOZ1725, Perth Delivery"  
    **VOZ1725:** "AVNEX5 departure, squawk 1336, bay 47B, VOZ1725"  
    **PH ACD:** "VOZ1725, contact me when ready for pushback"  
    **VOZ1725:** "Wilco, VOZ1725"  
    ...   
    **VOZ1725:** "Perth Delivery, VOZ1725, bay 47B, request pushback"  
    **PH ACD:** "VOZ1725, standby for ground 121.7"  
    **VOZ1725:** "Standby for ground 121.7, VOZ1725"  
    ...   
    **PH SMC:** "VOZ1725, Perth Ground, pushback approved."

If a delay is required prior to transferring an aircraft to SMC, provide an estimated delay value to the pilot or advise them of their position in the queue.

!!! tip
    Remember that the **bottom** aircraft represents the **front** of the queue.

!!! phraseology
    **VOZ1725:** "Perth Delivery, VOZ543, bay 47B, request pushback"  
    **PH ACD:** "VOZ1725, estimated delay 10 minutes, remain this frequency."

#### Queue Management
To reduce SMC workload, ACD should not allow more than **three** aircraft to be awaiting pushback or taxi on the SMC frequency. When three aircraft are already queued on the SMC frequency, any additional aircraft should be told to remain on the ACD frequency and informed of their position in the queue or approximate delay (if known). These aircraft should be placed in the **Cleared Bay Queue**, above the **Standby for Ground** bar.

<figure markdown>
![ACD Ops with OzStrips](../../controller-skills/img/ozstripscoordinator.png){ width="800" }
  <figcaption>Pushback Requests on ACD Ops with OzStrips<br><small>Three aircraft are waiting on the SMC frequency (below the Queue bar), and QFA121 and RXA6416 have both requested push/taxi but are being held on the ACD frequency. QFA121 is closer to the bottom, so will be next to be told to standby for SMC.</small></figcaption>
</figure>

When SMC moves an aircraft from below the **Standby for Ground** bar to the **Pushback Bay**, ACD should instruct the next aircraft in line to standby for ground on the SMC frequency (and move the strip appropriately).

!!! warning "Important"
    Strips must remain in the strip bay of their **current state**, even if they are in a queue. For example, if they have received an airways clearance and are in the queue for pushback, they must remain in the **Cleared Bay**, **not** the Pushback Bay.

#### COBT Slot Times
During busy events, VATPAC may utilise prebooked slots to manage traffic congestion. Aircraft which are compliant with their booked slot time should be prioritised over aircraft who are non-compliant or do not have a slot.

<figure markdown>
![COBT Slot Time](img/slottime.png){ width="200" }
  <figcaption>COBT Slot Time</figcaption>
</figure>

## Coordination
### Auto Release
[Next](../../controller-skills/coordination.md#next) coordination is **not** required for aircraft that are:   

- Departing from a runway nominated on the ATIS; and  
- Assigned the standard assignable level; and  
- Assigned a **Procedural SID**

All other aircraft require a 'Next' call to PH TCU.

The Standard Assignable level from PH ADC to PH TCU is:

| Aircraft | Level |
| -------- | ----- |
| All | The lower of `A050` and `RFL` |

### Departures Controller
Refer to [Perth TCU Airspace Division](../../../terminal/perth/#airspace-division) for information on airspace divisions when **PHD** is online.

### ACD to PH TCU
The controller assuming responsibility of ACD shall give [heads-up](../../controller-skills/coordination.md#airways-clearance) coordination to the relevant PH TCU controller prior to the issue of the following clearances:  

- VFR departures into PH TCU CTA
- Aircraft using a runway not on the ATIS 