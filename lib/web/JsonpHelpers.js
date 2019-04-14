// @ts-nocheck
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

/** @typedef {import("../Chunk")} Chunk */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {(string|number)[]} EntryItem */

/**
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @param {Chunk} chunk the chunk
 * @returns {EntryItem[]} serialized entry info:
 * inner arrays have this format [module id, ...chunk ids]
 */
const shouldRender = module => {
	if (module.type === "javascript/auto") return true;
	if (module.type === "javascript/dynamic") return true;
	if (module.type === "javascript/esm") return true;
	if (module.type === "webassembly/experimental") return true;
	if (module.type === "json") return true;
}
exports.getEntryInfo = (chunkGraph, chunk) => {
	return Array.from(
		chunkGraph.getChunkEntryModulesWithChunkGroupIterable(chunk)
	).map(([module, chunkGroup]) => {
		const deferChunks = chunkGroup.chunks.filter(chunk => {
			// return chunkGraph.getChunkModules(chunk).filter(module => shouldRender(module)).length > 0;
			return chunk.id && chunk.id.indexOf('base') < 0;
		});
		// console.log(chunkGroup.chunks.filter(chunk => {
		// 	// return chunkGraph.getChunkModules(chunk).filter(module => shouldRender(module)).length > 0;
		// 	return chunk.id && chunk.id.indexOf('base') < 0;
		// }));
		// console.log(deferChunks);
		console.log('[chunkGraph.getModuleId(module)]:',[chunkGraph.getModuleId(module)]);
		return [chunkGraph.getModuleId(module)].concat(
			deferChunks.filter(c => c !== chunk).map(c => c.id)
		)

	}
	);
};
