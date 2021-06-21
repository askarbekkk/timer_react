import React from 'react'

function ButtonDisplayComponent({startTime, status, stop, reset, resume}) {
    return (
        <div>
            {status === 0 ?
                <button className='stopwatch-btn stopwatch-btn-gre'
                        onClick={startTime}
                >
                    START
                </button>
                : ''
            }


            {status === 1 ?
                <div>
                    <button className='stopwatch-btn stopwatch-btn-red'
                            onClick={stop}
                    >
                        STOP
                    </button>

                    <button className='stopwatch-btn stopwatch-btn-yel'
                            onClick={reset}
                    >
                        Reset
                    </button>
                </div>
                : ''
            }


            {status === 2 ?
            <div>
                <button className='stopwatch-btn stopwatch-btn-gre'
                        onClick={resume}
                >
                    Resume
                </button>

                <button className='stopwatch-btn stopwatch-btn-yel'
                        onClick={reset}

                >
                    Reset
                </button>
            </div>
            : ''
            }
        </div>
    );
}

export default ButtonDisplayComponent;
