class SubmissionsController < ApplicationController
  before_action :set_submission, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token

  # GET /submissions.json
  def index 
    @submission = Submission.new
  end

  def all_submissions
    @submissions = Submission.all
    respond_to do |format|
      format.json { render :json => @submissions.to_json }
    end
  end

  # POST /submissions
  def create
    @submission = Submission.create(submission_params)

    respond_to do |format|
      format.json { render :json => @submission.to_json }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_submission
      @submission = Submission.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def submission_params
      params[:submission].permit!
    end
end
