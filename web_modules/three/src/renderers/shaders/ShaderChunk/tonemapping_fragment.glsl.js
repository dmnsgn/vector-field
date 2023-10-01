var tonemapping_fragment = /* glsl */ `
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;

export { tonemapping_fragment as default };
