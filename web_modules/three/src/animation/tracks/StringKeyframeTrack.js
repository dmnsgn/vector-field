import { InterpolateDiscrete } from '../../constants.js';
import { KeyframeTrack } from '../KeyframeTrack.js';
import '../../math/interpolants/CubicInterpolant.js';
import '../../math/Interpolant.js';
import '../../math/interpolants/LinearInterpolant.js';
import '../../math/interpolants/DiscreteInterpolant.js';
import '../AnimationUtils.js';
import '../../math/Quaternion.js';
import '../../math/MathUtils.js';

/**
 * A Track that interpolates Strings
 */ class StringKeyframeTrack extends KeyframeTrack {
    // No interpolation parameter because only InterpolateDiscrete is valid.
    constructor(name, times, values){
        super(name, times, values);
    }
}
StringKeyframeTrack.prototype.ValueTypeName = 'string';
StringKeyframeTrack.prototype.ValueBufferType = Array;
StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete;
StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = undefined;
StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = undefined;

export { StringKeyframeTrack };
