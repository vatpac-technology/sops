---
title: Handover/Takeover
---

--8<-- "includes/abbreviations.md"

A **handover** is necessary whenever the responsibility for a ATS is being transferred between controllers to ensure a seamless transition of services provided to aircraft.

In the real-world, regular **handovers** are conducted as the responsibility for a position changes between individual controllers as shifts start and end. 

On the network, we don't have shift schedules to rely on: instead, handovers are conducted whenever there is a transfer of responsibility. This can be either when a new controller logs on intending to replace a controller who is logging off, when a controller is logging on to a position that is being controlled "top-down" by another position, or when a controller is logging off and another position is assuming responsibility for that position "top-down".

## Handover Process
Handovers should be conducted over voice, preferably via the VSCS coldline or through one of the handover channels in the VATPAC Discord.

It is the responsibility of the **controller logging on or off** to obtain a handover.

!!! tip
    Refer to section 2.12.6 of the VATPAC *[Air Traffic Services Policy](https://vatpac.org/publications/policies){target="_blank"}* to learn more about the responsibilities of a controller when opening a new position.
	
	Sending a simple *"Hi online"* controller message or logging on silently without conducting a handover is considered bad practice.


## Elements of an Effective Handover
Handovers should include all the information necessary for the controller 'taking over' the position to provide a quality service. The mneumonic **RAWFTO** is a great way to achieve this:

### RAWFTO
#### Runways

- What runways are in use?
- Are any [special runway modes](./runwaymanagement), such as SODPROPS or LAHSO, in operation?

#### Airspace (or Area of Responsibility)

- What is your current area of responsibility?
- What top-down services are you providing?
- *For SMCs/ADCs*
    - Have any runways been [released to SMC](./coordination/#runway-releases)?
- *For Enroute/TCU*
    - Where are you [extending](./extending)?
    - Are there any active [SUAs](./sua)?

#### Weather

- What are the current weather conditions?
- Are there any significant weather changes forecast?
- *For Enroute/TCU*
    - Does the Area QNH preclude cruising at `F110`?  

#### Frequencies

- What frequencies are active?  

#### Traffic

- For each aircraft in your area of responsibility, explain their current status and any outstanding tasks related to them.
- *For Enroute/TCU*
    - Transfer tags as required.

#### Outstanding Matters

- Are you responsible for any ATISes?
- Is OzStrips up to date?
- Is there any coordination that needs to happen?  
- Are there any flow actions that need to take place?
- Anything else?  

### Example
!!! example
	=== "SMC"
		*The current PH SMC controller is conducting a handover briefing with a relief controller during a busy event.*
		"Hello,
		
		**Runways**: Runways 24 and 21 are in use for arrivals, Runway 21 is in use for departures.  

		**Area of Responsibility**: PH ACD is online, and we are implementing the [Pushback Requests on ACD](./grounddelaymanagement/#pushback-requests-on-acd) procedure. PH SMC E is offline, so we are responsibile for all taxiways. ADC has not released any runways to us.

		**Weather**: Weather is fine, nothing to report.

		**Frequencies**: We are using 121.7.

		**Traffic**: QFA219 and NWK1608 has been given taxi clearance to Runway 21. JST861 is holding short Runway 24, but I have not conducted coordination with ADC for them to cross. 

		NWK1605, VOZ471, and VOZ1865 have been given pushback clearance.
		
		No other aircraft are on the frequency.
		
		**Outstanding Matters**: We own the ATIS, and information J is current."

	=== "ADC"
		*SY ADC is intending to log off, and is conducting a handover briefing with SAN who will assume responsibility 'top-down'.*
		"Hello,
		
		**Runways**: 34L and 34R PROPS are in operation.  

		**Area of Responsibility**: SY SMC is online, and I have released Runway 25 to them.

		**Weather**: There is some heavy fog around the airport, and a couple of pilots have reported difficulty on final approach.  

		**Frequencies**: We are using 120.5.

		**Traffic**: QLK31D has been cleared to land Runway 34R. VOZ882 is at holding point A6, runway 34L, but has not yet reported ready. RSCU207 has been cleared the [CAPE BANKS 5 INBOUND](../aerodromes/classc/sydney/#arrivals) and will report at the Container Terminal.   
		
		**Outstanding Matters**: SMC owns the ATIS, and information X is current."  	
	
	=== "TCU"
	    *MAE is conducting a handover with MDN after agreeing to them opening the non-standard position*.
		"**Runways**: Runway 27AD is in use at YMML. The winds are favouring runway 18 at YMAV, 35L and 35R at YMMB, and 26 at YMEN.  

		**Area of Responsibility**: We will keep responsibility for MAE, you will assume MDN, MDS, MAV and MAW. MB ADC is online, and we are running ADC offline procedures at YMEN and YMAV.

		**Weather**: There is a SPECI for icing below `A090` within the TCU, and there is an active aerodrome warning for turbulence at YMML until 1000z. There is a forecast wind change in the TAF at 1030Z.  

		**Frequencies**: Currently cross-coupled 132.0, 118.9, 129.4, 133.55, and 135.7.

		**Traffic**: JST602 has reported taxiing at YMAV, but has not yet been given a clearance. They will call when ready at the holding point. QLK1563 has been cleared to climb via SID to `F240`. ABC is cruising at `A070` enroute to YBDG.
		
		**Outstanding Matters**: Heads up coordination with MUN is still required for ABC."
	
	=== "ENR"
	    *ARL has been extending to INL, but agrees with KEN to transfer responsibility to them for the sector, and conducts a handover*.
		"**Runways**: 19 PROPS is in use at YBBN, Runway 14 is in use at YBCG, and Runway 31 is in use at YBSU.

		**Area of Responsibility**: I am covering ARL and MNN, and will transfer INL to you. The M640A-D restricted areas are active `SFC-F600` until 1500z. AMA, BAN, and SU ADB are online. CFS ADC is offline, and I'll administer the Class G airspace.

		**Weather**: is mostly normal. A Boeing 737 reported moderate turblence overhead GOMOL at `F350`, 20 minutes ago. Area QNHs in Area 40 is below 1013, but high every else.   

		**Frequencies**: I have cross coupled 130.9 and 130.1, will drop 134.2 to you when you are ready.

		**Traffic**: JST796 is cruising at `F310` and has been given STAR clearance. ANZ148, VOZ346, VOZ1266, and QFA941 are cruising at their FPL.
		
		**Outstanding Matters**: ANZ148 needs to be handed off to TSN shortly as they are approaching the boundary."  