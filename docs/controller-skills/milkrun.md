---
title: Milk Run Monday
---

--8<-- "includes/abbreviations.md"

<details open markdown="1">
<summary>Milk Run</summary>

Milk Run Monday is a very busy event, that tests the limits of controllers at it's busiest. It is important to understand some processes that makes the event run as smooth as possible for all pilot and controllers involved. The information on this page is extracted from various Local Instructions and Controller Skills pages, collated to give all of the most relevant information to controlling the Milk Run event.

</details>

<details markdown="1">
<summary>ACD</summary>

## ACD
The job of the ACD controller during Milk Run is a fairly straight-forward one, however there are a couple of things to be mindful of.

Ensure that all flight plans are correct, nothing like `DOSEL DCT RIVET`, `GPS DIRECT`, or anything else unusual like that, just stick to the pre-approved Jet and Non-Jet routes. This helps reduce workload on Enroute controllers down the line.

### 16 Off Mode Departures at YMML
A Reminder that [Off Mode Departures from Runway 16](../../aerodromes/classc/Melbourne/#off-mode-departures) to the North East and North West during the 16A27D Runway Mode must be assigned the **ISPEG** SID, **NOT** the DOSEL SID. The **ISPEG** SID deconflicts concurrent 16 and 27 departures, whereas the DOSEL SID does not.

</details>

<details markdown="1">
<summary>SMC</summary>

## SMC
### Standard Taxi Routes
[YSSY](../../aerodromes/classc/Sydney/#standard-taxi-routes) and [YMML](../../aerodromes/classc/Melbourne/#standard-taxi-routes) both have Published Standard Taxi Routes that can be used to facilitate the orderly flow of traffic on the ground, but this does not preclude the SMC controller from using alternate routing if they deem it neccessary.

### Queuing
When giving taxi clearance, the SMC controller shall consider holding aircraft short of taxiways when in a long queue for a holding point, so that blockages are not caused on crossing taxiways. The Hotspots to pay the most attention to are circled below

<figure markdown>
![YMML Taxiway Hotspots](img/ymmlhotspots.png){ width="700" }
  <figcaption>YMML Taxiway Hotspots</figcaption>
</figure>

<figure markdown>
![YSSY Taxiway Hotspots](img/yssyhotspots.png){ width="700" }
  <figcaption>YSSY Taxiway Hotspots</figcaption>
</figure>

### Protecting Runway Exits
Arriving aircraft *should* hold short of any crossing taxiways upon exiting the runway, but that doesn't mean they always will! Hold short instructions should be used to protect exit taxiways where practical.

#### YMML
In order to protect common Runway Exit Taxiways, Consider instructing aircraft taxiing:  
- Northbound on Taxiway `V`, to Hold Short of Taxiways `F` and `E`  
- Southbound on Taxiway `V`, to Hold Short of Taxiways `G` and `J`

#### YSSY
In order to protect common Runway Exit Taxiways, Consider instructing aircraft taxiing:  
- Northbound on Taxiway `B`, to Hold Short of Taxiway `B8`  
- Southbound on Taxiway `A`, to Hold Short of Taxiway `A2` *(34 in use)*, or Taxiway `A4` *(16 in use)*

!!! note
    Utilising these hold short instructions also opens up the availability of taxiways `J` and `Y` as alternative taxi routes on the International terminal side

</details>

<details markdown="1">
<summary>ADC</summary>

## ADC
### Runway Modes
Careful selection of the duty runway at an aerodrome is important to ensure safe, expeditious traffic flow. When considering runway configuration, be mindful of the following operational considerations:
<ol>
    <li>Wind direction and speed</li>
    <li>SOP-dictated preferred runway modes</li>
    <li>Traffic flow and efficiency</li>
</ol>

Runway Modes should be selected for maximum aircraft movements, if the winds permit. That is:  
- at YSSY:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **16 PROPS**; or  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **34 PROPS**  
- at YMML:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **27AD34D**; or  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **16A27D**; or  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- **09A16D**

!!! Reminder
    For dry runways, the crosswind limitation is 20kt, and the tailwind limitation is 5kt. For wet runways, no tailwind component is permitted. Remember these limitations in selecting the runway mode which is best optimised and works within these limitations

#### Non-Standard Runway Modes
The usage of non-standard runway modes is **strongly not recommended**, unless approved by a Senior Controller for use in major events. Non-Standard runway modes can cause unintended conflicts in TCU and Enroute airspace that may only slightly reduce an ADC controller's workload, but *dramatically* increase that of the affected TCU or Enroute controller.

!!! example
    At YMML, one of the Preferred Runway Modes is 16A27D. If ADC were to add 16 as a departure runway (16AD27D), this may allow them to get more aircraft to depart. However, Subsequent departures from Runway 16, then via 27, both assigned a DOSEL SID, would be pointed directly at each other in TCU airspace, with no separation assurance. This creates a high workload environment for the TCU controller.

#### Approach Types
At YMML, the approach type in use has neglible affect on the traffic flow.

However, at YSSY, the use of Instrument Approaches vs Independent Visual Approaches during Parallel Runway operations has a big effect on the workload of the Sydney TCU controller, and how close they can run aircraft together on parallel runways. Refer to [YSSY Approach Types](../../aerodromes/classc/Sydney/#approach-types) for more information.

#### Runway Changes
Refer to [Runway Management SOPs](../runwaymanagement/#runway-changes) for advice on limiting Runway Mode changes during busy events.

### Departure Spacing
ADC should be aiming for **90 second** spacing between subsequent departures in the same direction (Obviously for Milk Run, almost all departures will be going the same way). Ensure that [Wake Turbulence Separation](../../separation-standards/runway/#wake-turbulence) is applied when the lead aircraft is of a **heavier** Wake Turbulence category than the following aircraft. It does not need to be applied between two aircraft of the **same** Wake Turbulence category.

### Line Up
It is best practice for ADC to line-up aircraft on the runway as soon as possible, ie, as soon as the landing aircraft has passed them, or as soon as the departing aircraft has started to roll. This minimises time spent waiting for aircraft to taxi in to position, and potentially cause gaps in the sequence and/or go-arounds.

!!! suggestion
    Appending the phrase "Be ready immediate" to the end of a line up instruction can ensure the pilot has all checklists completed, and is ready to commence takeoff roll as soon as the clearance is given. This reduces airborne delays, and potential go-around situations

</details>

<details markdown="1">
<summary>TMA</summary>

## TMA
In theory, aircraft should already be nicely sequenced when they enter your airspace, however, this is not always the case. There can also be additional aircraft that come in from other directions that need to be added to the sequence, which can make things challenging.

In general, try to keep any sequencing actions in the TMA as subtle as possible. Hard vectors, if not managed well, can be detrimental to the rest of the sequence, and have a knock-on effect that creates additional workload for quite a while.

Try to use techniques like **30 degree vectors**, and **gentle speed control** to achieve the sequence as required in the TMA.

### SY TMA Roles
When there are multiple controllers online in the Sydney TMA, the workload can be balanced between them as required based on the traffic scenario.

The *recommended* division of duties for **2** controllers is:  
- **Controller 1:**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SAS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SFW  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SFE  
- **Controller 2:**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SAN  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SDN  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SDS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SRI  

The *recommended* division of duties for **3** controllers is:  
- **Controller 1:**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SAS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SAN  
- **Controller 2:**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SFW  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SFE  
- **Controller 3:**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SDN  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SDS  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- SRI  

Depending on the Runway Mode, additional portions of airspace may be released between controllers as required to help facilitate the orderly flow of traffic. For example, during the **16 PROPS** Mode, it would be beneficial for SDN to release this portion of airspace to the Approach/Director controller, to facilitate aircraft positioning for a final for Runway 16L/R.

<figure markdown>
![SDN West Release](img/16sdnrls.png){ width="700" }
  <figcaption>SDN West Release</figcaption>
</figure>

### Go-arounds
When there is a go-around in the middle of a bumper-to-bumper sequence, a fair bit of work needs to be done. Obviously there is the additional work of having to vector the aircraft that has gone around back for an approach, but also trying to find a gap for them in the sequence, where none such gap currently exists. This is an important time to use coordination, and get the Enroute controller to create one for you.

!!! example
    <span class="hotline">**MAE** -> **ELW**</span>: "We've had a Go around. Additional 2 minute delay for all aircraft in this sequence please."  
    <span class="hotline">**ELW** -> **MAE**</span>: "Copy, additional 2 minute delay for all aircraft in this sequence."  

</details>

<details markdown="1">
<summary>Enroute</summary>

## Enroute
### Early Handoffs
The most important job of the ELW/BLA controller is the sequencing for YMML. Likewise, the most important job of the GUN/BIK controller is the sequencing for YSSY. In order to make the job of these controllers easier, it is beneficial for them to receive aircraft ***as early as possible***, so they can start to execute all the required actions, like assigning a STAR, amending route if required, enacting speed control, and issuing delay vectors or holding if required.

This is most important for the BLA transfer to GUN, as GUN does not have a lot of airspace to complete the YSSY sequence.  
BLA should aim to handoff aircraft to GUN approximately **50nm** to the boundary, unless there is a restriction (which is quite rare). Note that other aircraft going to GUN airspace (ie: Other aircraft on the YMML-YSSY route) are **not** considered a 'Restriction', as the GUN controller can already see them as Blue (Announced) on their display.

!!! Reminder
    [Handoff Rules](../coordination/#handoffs) permit turns of up to **45 degrees left/right**, and **climb/descent to any level** after handoff. Keep this in mind when considering how early you can handoff aircraft to the next sector

### Arrival Sequencing
Enroute controllers should be aiming for **2 minute** spacing at the feeder fix between subsequent arrivals. This can be reduced slightly to no less than **10nm**, unless **single runway operations** are in use.

!!! Reminder
    At YMML, aircraft on the LIZZI and BOYSE STARs are considered to be on the same STAR for sequencing purposes. Ie, an aircraft via BOYSE must be sequenced 2 minutes behind an aircraft via LIZZI, and vice versa

#### Speed Control
The most common descent profile to expect for a B738/A320 like aircraft is close to **Mach .78, transitioning in to 280kts**. Keep this in mind when applying speed control to aircraft. That being said, when taking control of an aircraft's speed, it is **always** best practice to ask the pilot what their current speed is first, rather than blindly launching in to an assigned speed with no idea what effect it will have.

If applying speed control to multiple aircraft in a sequence, there are some handy rules of thumb to be mindful of:  
- If the lead aircraft is doing the **same IAS** as the following aircraft, the distance between them will **close** at about **0.5nm per minute**  
- If the lead aircraft is going **20kt IAS faster** than the following aircraft, the distance between them will **hold steady**

#### Responsibilities
**GUN** and **BIK** are responsible for Sequencing in to **YSSY**. **ELW** and **BLA** are responsible for sequencing in to **YMML**. Although it may seem helpful for other sectors to start to apply speed control to assist with the sequence, sometimes this may hinder natural overtakes from occurring, and create bigger gaps in the sequence, making the job harder for the next controller. It also may not take in to consideration aircraft inbound to the arrival airport from other directions, or that the next controller can create multiple arrival streams.

Best practice is to just focus on providing separation between aircraft (whether that be vertically, laterally, or longitudinally), and only start to apply sequencing techniques once the aircraft reaches the airspace of the responsible sector.

#### YSSY Arrivals
##### Runway Assignment
Although the standard runway assignment for arrivals via RIVET is the Western Parallel Runway, eventually, the airspace will get busy enough to warrant distributing arrivals between both the Western and Eastern runways.

##### Amended routing via ODALE
In order to segregate aircraft inbound to different parallel runways, [Amended routing via ODALE](../../enroute/Melbourne Centre/BIK/#sequencing-into-yssy) should be used for aircraft assigned the Eastern parallel runway (16L/34R). This keeps aircraft segregated in to two distinct arrival streams, and allows a higher volume of arrivals.

Aircraft can be rerouted on first contact via AKMIR, ODALE, then assigned the ODALE7 arrival for 16L/34R.

<figure markdown>
![Original Flight Planned Route](img/odale1.png){ width="700" }
  <figcaption>Original Flight Planned Route</figcaption>
</figure>

<figure markdown>
![Graphical Reroute via AKMIR, ODALE](img/odale2.png){ width="700" }
  <figcaption>Graphical Reroute via AKMIR, ODALE</figcaption>
</figure>

<figure markdown>
![Final routing with Assigned STAR](img/odale3.png){ width="700" }
  <figcaption>Final routing with Assigned STAR</figcaption>
</figure>

Although this action may be beneficial to the arrival flow for both Enroute and Approach, it goes against the [Standard runway and STAR assignment](../../enroute/Melbourne Centre/BIK/#sequencing-into-yssy) for YSSY Arrivals from the South-west, so must still be coordinated to SAS or SFL (if online)

!!! example
    <span class="hotline">**GUN** -> **SFL**</span>: "QFA494 will be via ODALE for 34R"  
    <span class="hotline">**SFL** -> **GUN**</span>: "QFA494 via ODALE, 34R, Roger"  

In order to reduce this coordination, GUN/BIK and SFL/SAS may organise blanket coordination to allow this rerouting at the discretion of the GUN/BIK controller.

</details>

<details markdown="1">
<summary>Workload Management</summary>

## Workload Management
### Splitting
Never ever ever ever ever (ever) deny an offer to split up your sector! It could be someone offering to take:  
- **BLA** from **ELW**  
- **WOL** from **BIK**  
- **SY_DEP** from **SY_APP**  
- **SY-E_GND** from **SY_GND**  
The event gets busy every week, and denying offers to split takes away from the potential pool of controllers to help the event run smoothly. It is better to have a bit of a quieter half an hour, then be ready for the busy rush, than it is to have a decent amount of traffic for half an hour, and get completely snowed under after that.

#### Prioritisation
Some sectors generally require splitting more than others. For example, the Melbourne TMA can usually operate without the need for a Departures controller for the whole event (although if there's no room for an S3 anywhere else, it's still worth having), whilst a second/third controller in the Sydney TMA is always extremely beneficial. Enroute splits such as WOL and BLA are also extremely beneficial to balancing the workload of the event.

It can also be beneficial to redistribute the ratings across the event. For example, if Sydney TMA has two or three C1+ controllers on, whilst ELW is covering an offline BIK, it would be prudent for one of the Sydney TMA controllers to move up and cover BIK.

#### Projecting
Project **ahead of time** when your sector will be busy, by looking at things like:  
- ADEP Strip List Length  
- Announced Strip List Length  
- Number of Blue Announced tracks on screen  
- Number of Blue Announced tracks when zoomed out  

Use this information to know that you will be busy soon, and put out a request for a split in the [atc-coordination](https://discord.com/channels/343999482737721354/613736441717194755){target=new} discord channel. If you start to encounter things like:  
- Aircraft stepping on each other  
- Multiple aircraft having to ask for further climb/descent  
- Aircraft not listening to your calls  
It may already be too late! And to make matters worse, if you wait too long to ask, there might not be any controllers available to split the sector.

### Coordination
Regular Coordination with your peers is critical to the efficient operation of a Milk Run. Not only from a control perspective (eg, asking for an early handoff, requesting an amended route, suggested heading for separation between TMA/ENR, etc), but also from a more long-term event management perspective. If things are getting too busy in your airspace, or are about to get very busy, you may elect to:  
- Ask the ADC controller for additional departure spacing  
- Temporarily Stop departures  
- Ask the adjacent Enroute controller for additional spacing  
- (As the TMA Controller) Ask the Enroute controller for an additional **2 minute delay for all aircraft**, due to a **go-around**

It is also important to not accept aircraft that are in conflict! If the TMA controller is trying to handoff two aircraft pointed at each other at the same level, give them a call on the Hotline, and ask them to fix it before handing off to you. Of course you may offer/suggest a solution, but it should not be your conflict to solve.

</details>