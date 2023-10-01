var clearcoat_normal_fragment_begin = /* glsl */ `
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;

export { clearcoat_normal_fragment_begin as default };
