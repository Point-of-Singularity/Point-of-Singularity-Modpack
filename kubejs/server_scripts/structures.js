////////////////////////////////////////
// SCRIPT MADE FOR POINT OF SINGULARITY
// BY SVETRIK
////////////////////////////////////////

// REMOVE STRUCTURES
ServerEvents.tags("worldgen/biome", (event) => {
	// MINECRAFT
	event.get("minecraft:has_structure/ruined_portal_desert").removeAll()
	event.get("minecraft:has_structure/ruined_portal_jungle").removeAll()
	event.get("minecraft:has_structure/ruined_portal_mountain").removeAll()
	event.get("minecraft:has_structure/ruined_portal_nether").removeAll()
	event.get("minecraft:has_structure/ruined_portal_ocean").removeAll()
	event.get("minecraft:has_structure/ruined_portal_standard").removeAll()
	event.get("minecraft:has_structure/ruined_portal_swamp").removeAll()
	event.get("minecraft:has_structure/ocean_ruin_cold").removeAll()
	event.get("minecraft:has_structure/ocean_ruin_warm").removeAll()
	// AE2
	event.get("ae2:has_meteorites").removeAll()
})