class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:show, :edit, :update, :destroy]

  # GET /submissions.json
  def index 
  end

  def all_submissions
    @submissions = Submission.all
    respond_to do |format|
      format.json { render :json => @submissions.to_json }
    end
  end

  # GET /submissions/1
  def show
  end

  # GET /submissions/new
  def new
    @submission = Submission.new
  end

  # GET /submissions/1/edit
  def edit
  end

  # POST /submissions
  def create
    @submission = Submission.new(submission_params)

    if @submission.save
      redirect_to @submission, notice: 'Submission was successfully created.'
    else
      render action: 'new'
    end
  end

  # PATCH/PUT /submissions/1
  def update
    if @submission.update(submission_params)
      redirect_to @submission, notice: 'Submission was successfully updated.'
    else
      render action: 'edit'
    end
  end

  # DELETE /submissions/1
  def destroy
    @submission.destroy
    redirect_to submissions_url, notice: 'Submission was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_submission
      @submission = Submission.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def submission_params
      params[:submission]
    end
end
