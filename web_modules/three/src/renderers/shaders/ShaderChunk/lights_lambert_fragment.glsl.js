var lights_lambert_fragment = /* glsl */ `
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;

export { lights_lambert_fragment as default };
