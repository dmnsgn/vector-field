import { AnimationClip } from '../animation/AnimationClip.js';
import { FileLoader } from './FileLoader.js';
import { Loader } from './Loader.js';
import '../animation/AnimationUtils.js';
import '../math/Quaternion.js';
import '../math/MathUtils.js';
import '../constants.js';
import '../animation/KeyframeTrack.js';
import '../math/interpolants/CubicInterpolant.js';
import '../math/Interpolant.js';
import '../math/interpolants/LinearInterpolant.js';
import '../math/interpolants/DiscreteInterpolant.js';
import '../animation/tracks/BooleanKeyframeTrack.js';
import '../animation/tracks/ColorKeyframeTrack.js';
import '../animation/tracks/NumberKeyframeTrack.js';
import '../animation/tracks/QuaternionKeyframeTrack.js';
import '../math/interpolants/QuaternionLinearInterpolant.js';
import '../animation/tracks/StringKeyframeTrack.js';
import '../animation/tracks/VectorKeyframeTrack.js';
import './Cache.js';
import './LoadingManager.js';

class AnimationLoader extends Loader {
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        const loader = new FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(text) {
            try {
                onLoad(scope.parse(JSON.parse(text)));
            } catch (e) {
                if (onError) {
                    onError(e);
                } else {
                    console.error(e);
                }
                scope.manager.itemError(url);
            }
        }, onProgress, onError);
    }
    parse(json) {
        const animations = [];
        for(let i = 0; i < json.length; i++){
            const clip = AnimationClip.parse(json[i]);
            animations.push(clip);
        }
        return animations;
    }
    constructor(manager){
        super(manager);
    }
}

export { AnimationLoader };
