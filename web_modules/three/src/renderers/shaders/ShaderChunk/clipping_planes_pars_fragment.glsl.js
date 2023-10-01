var clipping_planes_pars_fragment = /* glsl */ `
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;

export { clipping_planes_pars_fragment as default };
