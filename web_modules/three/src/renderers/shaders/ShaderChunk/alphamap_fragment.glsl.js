var alphamap_fragment = /* glsl */ `
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;

export { alphamap_fragment as default };
