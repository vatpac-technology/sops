---
title: Coordination
---

--8<-- "includes/abbreviations.md"

Coordination is an underutilised tool in VATPAC airspace, primarily due to how difficult it was to do it back in the Euroscope and VRC days. Now, all controllers are using vatSys and voice coordination can be done in seconds with the touch of a button. Coordination helps controllers stay aware of aircraft that are about to enter their jurisdiction and ensure they will operate in a predictable manner, which allows for easier planning of sequencing and separation.

Coordination requirements are often very location-specific, however this page outlines the general guidelines to coordination, which are supplemented by Local Instructions.

[MATS Chapter 6](https://www.airservicesaustralia.com/mats/docs/nos-saf-2000.pdf){target=new} goes in to much more detail about coordination principles, phraseology, and situations. It is well above the level required for VATSIM, but feel free to read up on it if you want to extend your learning.

## Coordination in vatSys
Coordination is performed using the VSCS window in vatSys.  Once logged onto a relevant position, controllers have the option of opening **hotlines** and **coldlines** to surrounding positions.  

A hotline is opened by pressing the yellow button titled with the sector you wish to communicate with, which creates an instant connection between positions with no need for the other controller to accept the call.  A coldline is opened by pressing the blue button titled with the sector you wish to communicate with, which notifies the other position and requires them to accept the call before communications can begin.

!!! tip
    For more in depth information, refer to the [vatSys website](https://virtualairtrafficsystem.com/docs/vscs/){target=new}.

Coordination notes are included for most positions, using the following format: 
!!! note "" 
    `Hotline`:  <span class="hotline">**ORIGINATING SECTOR** -> **RECEIVING SECTOR**</span>: "Message"  
    `Coldline`:  <span class="coldline">**ORIGINATING SECTOR** -> **RECEIVING SECTOR**</span>: "Message"  

## General Phraseology
As a receiving controller, answer a coordination call by stating the name of **your** position.

!!! phraseology
    *GUN calls SAS with a hotline to discuss an arrival*  
    <span class="hotline">**GUN** -> **SAS**</span>: \***DING**\*  
    <span class="hotline">**SAS** -> **GUN**</span>: "Sydney Approach"  
    <span class="hotline">**GUN** -> **SAS**</span>: "Via RIVET, QFA541, request heading 030 due weather"  
    <span class="hotline">**SAS** -> **GUN**</span>: "QFA541, Concur heading 030"

If you are busy at the time, tell the other controller to *standby*. If you anticipate a long delay, tell the controller that you'll call them back.

!!! phraseology
    *ELW calls MAE with a hotline but MAE is awaiting a readback from an aircraft*  
    <span class="hotline">**ELW** -> **MAE**</span>: \***DING**\*  
    <span class="hotline">**MAE** -> **ELW**</span>: "Standby"  
    *When MAE is ready*  
    <span class="hotline">**MAE** -> **ELW**</span>: "Go ahead, Centre"  

Each controller must verbalise the instruction, clearance, or change once. Generally, with one controller requesting a change, the approving controller will confirm it, completing the conversation.

!!! phraseology
    <span class="hotline">**ELW** -> **MAE**</span>: "Via BOOIN, JST414, assigned FL120 for my separation with VOZ92"  
    <span class="hotline">**MAE** -> **ELW**</span>: "FL120, JST414"

In situations where additional changes have been discussed (and as such, both controllers have not yet verbalised them), a readback is required.

!!! phraseology
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Next, LKU, runway 15"  
    <span class="hotline">**CS TCU** -> **CS ADC**</span>: "LKU, runway 15, left turn, unrestricted"  
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Left turn, LKU"

### Point-to-Point
Coordination must be done on a **point-to-point** basis, meaning you can only coordinate with the sector which the aircraft is coming from, or going to, no skipping! 

!!! example
    You are controlling ELW and you would like to pass an amended route to someone on the ground at YMML. Whilst that may be no issue for ML SMC and ML ADC, it might not work for ML APP. ML APP would be the sector which the aircraft is coming from, so ELW must talk to them, and it is the responsibility of ML APP to work backwards down the line on a point-to-point basis.

Ensure no coordination is ambiguous in its meaning. Not all coordination can be straight out of the phraseology books and the reality is, not everyone controlling the airspace is going to be 100% proficient and by the books. When using "plain english", ensure there is no ambiguity, and the message is fully understood by both parties.

## Types of Coordination
### Voiceless
Certain routes, areas, levels, airspace, etc, will have voiceless coordination agreements, which is where Heads-Up Coordination is not required. These routes may also have change parameters, where no changes are permitted within a certain distance of the sector boundary without prior coordination.

### Heads-up
Heads-up Coordination is the act of giving the next sector a "heads-up" about an aircraft about to enter their airspace. The format is as follows:

!!! note "" 
    <span class="hotline">**Controlling Sector** -> **Receiving Sector**</span>: "(Position), (Callsign)"  
    <span class="hotline">**Receiving Sector** -> **Controlling Sector**</span>: "(Callsign), (Level)"


!!! phraseology
    <span class="hotline">**BLA** -> **GUN**</span>: "via CB, VOZ1234"  
    <span class="hotline">**GUN** -> **BLA**</span>: "VOZ1234, F350"  

If the level that will be assigned at transfer of jurisdiction is different from the current CFL, the Controlling Sector will use the phrase "*will be assigned (level)*".

If the Receiving Sector requires a change of level, they'll reply with the amended level.

!!! phraseology
    <span class="hotline">**SNO** -> **GUN**</span>: "Via CB, VOZ1531"  
    <span class="hotline">**GUN** -> **SNO**</span>: "VOZ1531, F330 due traffic"  
    <span class="hotline">**SNO** -> **GUN**</span>: "F330, VOZ1531"

Once this coordination is completed, the aircraft's level and route is **locked in**. Any further changes must be recoordinated. 

!!! tip
    In situations where Heads-Up Coordination is required, the best time to do it is when the aircraft first calls you. There's no need to wait until half a mile before when its due, if you can get it done sooner.

### Boundary
Boundary coordination is required when an aircraft may deviate within ***half the applicable standard*** of another sector's airspace.  

Ie: within:  

- **500ft** vertically; or  
- **2.5nm** laterally for **ENR**; or  
- **1.5nm** laterally for **TCU/ADC**

Boundary coordination must be completed so they are aware of the aircraft, and can nominate any restrictions. The format is as follows:

!!! note "" 
    <span class="hotline">**Controlling Sector** -> **Boundary Sector**</span>: "For Ident, (Position), (Callsign), (Details as required)"  
    <span class="hotline">**Boundary Sector** -> **Controlling Sector**</span>: "(Callsign), (Restriction)"

!!! phraseology
    <span class="hotline">**GUN** -> **CBE**</span>: "For Ident, overhead CB, QFA12, do you have any restrictions on descent?"  
    <span class="hotline">**CBE** -> **GUN**</span>: "QFA12, No restrictions on descent"  

The Boundary Sector may omit the restriction and readback the callsign only. This will be taken as the Boundary Sector having **no vertical or lateral restrictions**.

!!! phraseology
    <span class="hotline">**INL** -> **BAS**</span>: "For Ident, west of BLAKA, FD516"  
    <span class="hotline">**BAS** -> **INL**</span>: "FD516"

### Next
Next coordination is performed between ADC and TCU controllers to discuss the next aircraft to depart. As a general rule, all departing aircraft require Next coordination, unless stipulated by local SOPs through the use of Auto Release. Auto Release can be cancelled at any time through mutual agreement of the ADC and TCU controllers.

The format is as follows:

!!! note "" 
    <span class="hotline">**ADC** -> **TCU**</span>: "Next, (Callsign), (Runway)"  
    <span class="hotline">**TCU** -> **ADC**</span>: "(Callsign), (Runway), (Lateral and/or Vertical Instructions)"

Aircraft assigned a procedural SID will generally not be issued with lateral instructions. Aircraft assigned a radar SID or visual departure must be provided with an assigned heading or other lateral departure instructions, with examples shown below:

| Instruction | Meaning |
| ----------- | ------- |
| Left/right turn | Make a visual left/right turn to establish on the planned outbound track |
| Left 180 | At the SID turn height, or at a safe altitude (if visual departure), fly heading 180 |
| Left 180 visual | As above, but with a pilot requirement to maintain visual separation with the ground/water and any obstacles |
| Extended runway centreline | Track the extended runway centreline (accounting for drift) |

An amended level may be instructed, or the term **unrestricted** used to indicate that no *additional* vertical restrictions apply. This permits the aircraft to climb to their cleared level (as issued with their airways clearance).

!!! note
    The term '*unrestricted*' is not a readback item.

!!! phraseology
    *LKU is conducting a visual departure from YBCS*  
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Next, LKU, runway 15"  
    <span class="hotline">**CS TCU** -> **CS ADC**</span>: "LKU, runway 15, left turn, unrestricted"  
    <span class="hotline">**CS ADC** -> **CS TCU**</span>: "Left turn, LKU"
    
    *QFA442 is assigned a procedural SID from YMML with Auto Release cancelled*  
    <span class="hotline">**ML ADC** -> **ML TCU**</span>: "Next, QFA442, runway 16"  
    <span class="hotline">**ML TCU** -> **ML ADC**</span>: "QFA442, unrestricted"  

### Airways Clearance
The local procedures of some aerodromes require ACD to coordinate with the TCU prior to issuing airways clearance to certain aircraft. This coordination allows the TCU controller to assess the current & projected traffic levels, and current position staffing, and determine whether clearance is available.

The format is as follows:

!!! note ""
    <span class="hotline">**ACD** -> **TCU**</span>: "(Callsign) requests clearance to (Destination), (Any Other Relevant Details)"  
    <span class="hotline">**TCU** -> **ACD**</span>: "(Callsign), clearance approved"

!!! phraseology
    <span class="hotline">**SY ACD** -> **SY TCU**</span>: "FD213 requests clearance to Bankstown"  
    <span class="hotline">**SY TCU** -> **SY ACD**</span>: "FD213, clearance approved"

If a change of level or tracking is required, the TCU controller shall provide this change during this exchange.

### Intra-Tower Coordination
#### Runway Crossings
When coordinating with Tower, there are three key items that must be used.

- Aircraft Type: A320, B737, B777, C172, etc;
- Location: Taxiway the aircraft is currently on;
- Runway: The runway the aircraft will enter, backtrack or cross.

The format is as follows:

!!! note ""
    <span class="hotline">**SMC** -> **ADC**</span>: "(Aircraft Type) on (Location) to cross (Runway)."  
    <span class="hotline">**ADC** -> **SMC**</span>: "(Aircraft Type) on (Location) cross (Runway)."
    <span class="hotline">**SMC** -> **ADC**</span>: "Cross (Runway)."  
	  *or*
    <span class="hotline">**ADC** -> **SMC**</span>: "Negative. Hold Short."
    <span class="hotline">**SMC** -> **ADC**</span>: "Hold Short (Runway)."  

#### Runway Releases
As an alternative to coordinating individual aircraft crossings, ADC may 'release' a non-active runway to SMC. This reduces the workload of both controllers by allowing SMC to instruct aircraft to cross or otherwise use the non-active runway without coordination.

!!! phraseology
    <span class="coldline">**CB SMC** -> **CB ADC**</span>: "Request Runway 30 release to Ground"  
    <span class="coldline">**CB ADC** -> **CB SMC**</span>: "Runway 30 released to Ground"

Either ADC or SMC should place a **Runway ## Released to SMC** bar into the **Runway Bay**, using the "Add Bar" button in the [Control Bar](../../client/towerstrips/#control-bar).

##### Recalling a Runway
ADC can recall a runway release immediately. Upon recall, SMC shall acknowledge the recall with a traffic statement.

!!! phraseology 
    <span class="hotline">**AD ADC** -> **AD SMC**</span>: "Cancel release of Runway 30"
    <span class="hotline">**AD SMC** -> **AD ADC**</span>: "Runway 30, no traffic" 
	  *or*	
    <span class="hotline">**AD SMC** -> **AD ADC**</span>: "Runway 30, traffic is a B737 crossing on F."

#### Helicopter Air Transit
A helicopter performing an air transit maneouvre must be coordinated from SMC to ADC.

!!! phraseology 
    <span class="hotline">**BRM SMC** -> **BRM ADC**</span>: "Robinson 44 on Eastern Heli Parking, for air transit to Western Helipad"
    <span class="hotline">**BRM ADC** -> **BRM SMC**</span>: "Air transit approved."

## The C-Prompt (Coordination Prompt)
Display the "C-Prompt" when all coordination for an aircraft is complete, or voice coordination is not required for an aircraft (ie. subject to voiceless coordination).

The "C-Prompt" can be displayed by middle clicking the area just above the aircraft's callsign in the label.

<figure markdown>
![C-Prompt](img/cprompt.png){ width="200" }
  <figcaption>C-Prompt</figcaption>
</figure>

Remove the "C-Prompt" once jurisdiction of the aircraft has been handed off, and the new frequency has been correctly read back.

## No Frequency Requirements (NFR)
Occasionally, aircraft may clip small parts of a sector's airspace on their planned route. If an aircraft only enters someone's airspace for a small distance, there is usually no need for them to talk to that controller. In this instance, a controller may coordinate an aircraft to have "No Frequency Requirements" with another controller, or vice versa. This shall also be supplemented by the nomination of a restriction, or lack thereof. See below:

Source: [Annotations](../../controller-skills/annotations)

| Label Data / Global Ops | Meaning | Note |
| ---- | ----------- | --- |
| **NFR** | No Frequency Requirements | |
| **NRD** | No Restrictions on Descent | Additional coordination must be done for any **lateral** changes |
| **NRC** | No Restrictions on Climb | Additional coordination must be done for any **lateral** changes |
| **NVR** | No Vertical Restrictions | Additional coordination must be done for any **lateral** changes |
| **NLR** | No Lateral Restrictions | Additional coordination must be done for any **level** changes |
| **C(lvl)** | Cleared level (lvl) | Additional coordination must be done for any **lateral or level** changes |
| **NR** | No Restrictions | **Any and all** lateral and level changes approved |
| **NRR** | No Restrictions or Requirements | **Any and all** lateral and level changes approved, and No Frequency Requirements |

*Offering NFR*
!!! phraseology
    *ABC tracking MNG W663 VINOP*  
    <span class="hotline">**BLA** -> **YWE**</span>: "via MNG, ABC, if you have no restrictions or requirements, my onwards with OXL"  
    <span class="hotline">**YWE** -> **BLA**</span>: "ABC, I have no restrictions or requirements, your onwards with OXL"  
    BLA will put *"YWE NRR"* in the label data  
    <span class="hotline">**BLA** -> **OXL**</span>: "via MNG, ABC, YWE has no restrictions or requirements"  
    <span class="hotline">**OXL** -> **YWE**</span>: "ABC, F190"  
    BLA will handoff the aircraft directly to OXL

*Initiating NFR*
!!! phraseology
    *DEF tracking EML-LEMER-RK*  
    <span class="hotline">**SWY** -> **CVN**</span>: "via LEMER, DEF, I have no vertical restrictions or frequency requirements, your onwards with KPL"  
    <span class="hotline">**CVN** -> **SWY**</span>: "DEF, my onwards with KPL"  
    CVN will put *"SWY NVR NFR"* in the label data  
    <span class="hotline">**CVN** -> **KPL**</span>: "via LEMER, DEF, SWY has no vertical restrictions or frequency requirements"  
    <span class="hotline">**KPL** -> **CVN**</span>: "DEF"  
    CVN will handoff the aircraft directly to KPL

!!! note
    It is important to remember that this coordination is still a negotiation. You are free to reject any proposition that doesn't work for you and your traffic picture. And if there is a particular restriction to nominate, it is always best to take the aircraft on frequency.

## Handoffs
Receiving a handoff means you are permitted to turn an aircraft **45 degrees left or right**, and **climb/descend it to any level** without coordination. Do not handoff an aircraft to another sector if a turn of 45 degrees or a change of level would cause a conflict with any of your own aircraft. Or alternatively, you can nominate a restriction prior to handoff.

!!! phraseology
    <span class="hotline">**YWE** -> **TBD**</span>: "ABC, my restriction is DEF, calls you now"  
    <span class="hotline">**TBD** -> **YWE**</span>: "ABC, restriction is DEF, calls me now"

Upon receipt of a handoff, once the aircraft is established **half the applicable lateral standard** (2.5nm for ENR, 1.5nm for ADC/TCU) within your airspace, you are free to turn the aircraft as much as you like. If you need to turn them more than 45 degrees earlier than that, simply ask!

!!! phraseology
    <span class="hotline">**KPL** -> **RKA**</span>: "ZYX, do you have any restrictions?"  
    <span class="hotline">**RKA** -> **KPL**</span>: "ZYX, no restrictions"  
    KPL will place *"RKA NR"* in the label until 2.5nm clear of their airspace, to record that the coordination has been completed.

For more information, refer to individual local instructions.

## Rules
### Class D Towers
#### ENR/TCU -> Class D TWR
[Heads-up](#heads-up) coordinate arrivals/overfliers prior to **5 mins** from the boundary.

!!! note ""
    "Via (Route/Procedure), (Callsign), (Level - *if not standard assignable*), (Runway - *if not duty runway*)"

#### Class D TWR -> ENR/TCU
[Next](#next) call **within 2 minutes of takeoff** for all **CTA** departures.

### Radar Towers
#### Radar TWR -> TCU
[Next](#next) call **within 2 minutes of takeoff** unless overridden by local Auto Release rules.

If Auto Release is suspended by the TCU controller, respond by advising of any aircraft with a takeoff clearance.

!!! phraseology
    <span class="hotline">**TCU** -> **ADC**</span>: "Cancel Auto Release"  
    <span class="hotline">**ADC** -> **TCU**</span>: "Cancel Auto Release, QLK108D released"  
    <span class="hotline">**TCU** -> **ADC**</span>: "QLK108D"

#### TCU -> Radar TWR
Radar TWRs will [Next](#next) coordinate all departures unless permitted by local Auto Release rules. Respond with any lateral departure instructions (if required by SID or departure procedure) and any additional vertical restrictions, or "unrestricted". 

If due to weather, overflying aircraft, runway config changes, etc. Auto Release needs to be cancelled, advise this to the ADC controller.  They will respond with any aircraft who have a takeoff clearance.

!!! phraseology
    <span class="hotline">**TCU** -> **ADC**</span>: "Cancel Auto Release"  
    <span class="hotline">**ADC** -> **TCU**</span>: "Cancel Auto Release, QLK108D released"  
    <span class="hotline">**TCU** -> **ADC**</span>: "QLK108D"

### TCUs
#### ENR -> TCU
**Voiceless** for aircraft landing at main airport (eg YMML in ML TCU), assigned a STAR, and standard assignable level, unless overridden by local procedure.  

Heads-up coordinate all other aircraft by **20nm** to boundary.

#### TCU -> ENR
**Voiceless** for aircraft assigned lower of standard assignable level or RFL, and tracking via a Procedural SID terminus, unless overridden by local procedure.

!!! note
    Aircraft are *not required* to be tracking via the **SID procedure**, simply tracking via any of the terminus waypoints (regardless of *departure airport* or *assigned SID*) is sufficient to meet the criteria for **voiceless coordination**

Heads-up coordinate all other aircraft by the boundary.

### Enroute
#### ENR -> ENR
**Voiceless**, no changes to route or CFL within **50nm** of the boundary, unless overridden by local procedure.

#### To/from Oceanic/International Units
##### Pacific Units
For aircraft going between the following FIRs in Oceanic Airspace only:  

- YBBB  
- YMMM  
- NFFF
- NFFJ
- AGGG  
- ANAU  
- NZZO  
- NZCM  
- KZAK  
- NTTT  
- AYPM

**Voiceless**, no changes to route or CFL within **15 mins** of boundary.

##### Other Units
For aircraft going to the following FIRs:  

- WAAF  
- WIIF  
- VCCF  
- VRMF  
- FIMM  
- FAJO

Heads-up coordinate prior to **30 mins** to boundary.

Voice coordination to **International** units shall be done in the following format:

!!! note ""
    "Estimate, (Callsign), (Boundary Point) (Estimate), (Level), on climb/descent *if applicable*"

!!! phraseology
    <span class="coldline">**IND** -> **FIMM CTR**</span>: "Estimate, QFA63, IBMAT time 33, F360"  
    <span class="coldline">**FIMM CTR** -> **IND**</span>: "QFA63, F360"

### OCTA Coordination
For any aircraft transiting **to or from** uncontrolled airspace (ie: Class G, VFR Class E), heads-up coordination is **not required**. However, a **5 minute** change parameter applies to any aircraft that change level, route, or taxi within **5 minutes** of the next sector's airspace.