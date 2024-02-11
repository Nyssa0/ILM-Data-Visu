import Swup from 'https://unpkg.com/swup@4?module';
import SwupParallelPlugin from 'https://unpkg.com/@swup/parallel-plugin@0?module';

const swup = new Swup({
    containers: ["#swup"],
    plugins: [new SwupParallelPlugin()]
});
